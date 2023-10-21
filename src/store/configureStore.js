import {combineReducers, configureStore} from '@reduxjs/toolkit';
import getFolderSlice from './slices/getSlice';
import {persistReducer, persistStore} from 'redux-persist';
import favoriteSlice from './slices/favoriteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import basketSlice from './slices/basketSlice';

const reducer = combineReducers({
  folderGet: getFolderSlice,
  favoriteData: favoriteSlice,
  basketData: basketSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['favoriteData', 'basketData'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
