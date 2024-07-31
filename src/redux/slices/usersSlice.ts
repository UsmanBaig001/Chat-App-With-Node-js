import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {UserData} from '../../types/Types';
import {PATH} from '../../constants/constants';
import axios from 'axios';
export interface CounterState {
  Users: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  Users: [],
  loading: false,
  error: '',
};

export const getUsers = createAsyncThunk('users', async () => {
  try {
    const usersSnapshot = await axios.get(`${PATH}/allUsers`);
    const users = usersSnapshot.data;
    const filteredUsers = users.filter(
      (user: {email: string}) => user.email !== auth().currentUser?.email,
    );
    return filteredUsers as UserData[];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Error fetching users: ' + error);
  }
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
        state.Users = [];
      });
  },
});

export default userSlice.reducer;
