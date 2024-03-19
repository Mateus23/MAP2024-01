import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

export default configureStore({
  reducer: {
    trainer: pokemonReducer,
  }
})