import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteData: [],
};

export const getFavorite = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorites(state, action) {
      const favorite = state.favoriteData.find(
        item => item.id === action.payload.id,
      );
      if (favorite) {
        return;
      } else {
        state.favoriteData.push({...action.payload});
      }
    },
    resetGet: () => initialState,
  },
});
export const {resetGet, addFavorites} = getFavorite.actions;
export default getFavorite.reducer;
