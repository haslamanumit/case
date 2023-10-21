import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basketData: [],
};

export const getBasket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket(state, action) {
      const basket = state.basketData.find(
        item => item.id === action.payload.id,
      );
      if (basket) {
        return;
      } else {
        state.basketData.push({...action.payload});
      }
    },
    resetGet: () => initialState,
  },
});
export const {resetGet, addBasket} = getBasket.actions;
export default getBasket.reducer;
