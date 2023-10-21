import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  getData: null,
  getStatus: null,
  getIsLoading: false,
  getError: null,
};

export const getFolders = createAsyncThunk(
  'folder/get',
  async rejectWithValue => {
    const config = {
      method: 'get',
      url: 'https://dummyjson.com/products',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await axios(config)
      .then(function (response) {
        console.log(response.data, 'yanit')
        return response;
      })
      .catch(function (error) {
        rejectWithValue(error);
      });
    return response.data;
  },
);

//State slice
export const getFolderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    resetGet: () => initialState,
  },
  extraReducers: builder => {
    // Klasör listesi Hepsi
    builder.addCase(getFolders.pending, state => {
      state.getIsLoading = true;
      state.getError = false;
    });
    builder.addCase(getFolders.fulfilled, (state, action) => {
      state.getData = action.payload;
      state.getIsLoading = false;
      state.getError = false;
    });
    builder.addCase(getFolders.rejected, state => {
      state.getIsLoading = false;
      state.getError = true;
    });
  },
});
export const {resetGet} = getFolderSlice.actions;
export default getFolderSlice.reducer;
