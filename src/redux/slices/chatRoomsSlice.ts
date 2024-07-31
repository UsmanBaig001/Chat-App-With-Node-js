import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {ChatRoom, ChatRoomsState} from '../../types/Types';
import axios from 'axios';
import {PATH} from '../../constants/constants';

const initialState: ChatRoomsState = {
  chatRooms: null,
  loading: false,
  error: '',
};

export const getChatRooms = createAsyncThunk(
  'ChatRooms/getChatRooms',
  async () => {
    try {
      const uid = auth().currentUser?.uid;
      const chatRoomsSnapshot = await axios.get(`${PATH}/chatrooms`, {
        params: {uid},
      });
      return chatRoomsSnapshot.data as ChatRoom[];
    } catch (error) {
      console.error('Error fetching Chat Rooms Data:', error);
      throw new Error('An error occurred while fetching Chat Rooms Data');
    }
  },
);

export const chatRoomsSlice = createSlice({
  name: 'chatRooms',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getChatRooms.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.chatRooms = action.payload;
      })
      .addCase(getChatRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
        state.chatRooms = [];
      });
  },
});

export default chatRoomsSlice.reducer;
