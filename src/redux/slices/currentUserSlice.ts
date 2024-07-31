import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {UserData} from '../../types/Types';
import axios from 'axios';
import {PATH, SOCKET} from '../../constants/constants';

export interface CounterState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  user: null,
  loading: false,
  error: '',
};
export const getUserData = createAsyncThunk<UserData | null>(
  'currentUser/getUserData',
  async () => {
    try {
      const id = auth()?.currentUser?.uid;
      if (!id) {
        return null;
      }
      const userDoc = await axios.get(`${PATH}/user`, {
        params: {uid: id},
      });

      return userDoc.data as UserData;
    } catch (error) {
      // console.error('Error fetching user data:', error);
      throw new Error('An error occurred while fetching user data');
    }
  },
);

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUserData.fulfilled,
        (state, action: PayloadAction<UserData | null>) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
        },
      )
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred';
        state.user = null;
      });
  },
});

export default currentUserSlice.reducer;
