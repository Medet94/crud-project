import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../../utils/url';

export const getAllUsersFromServer = createAsyncThunk(
  'users/getAllUsers',
  async function (id) {
    const response = await fetch(`${getAllUsers}${id}`).then((response) =>
      response.json()
    );

    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersFromServer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsersFromServer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsersFromServer.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
