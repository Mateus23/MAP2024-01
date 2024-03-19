import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'trainer',
  initialState: {
    pokemons: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      console.log('add', state.pokemons)
    },
    removePokemon: (state, action) => {
      console.log('remove', state.pokemons)
    },
  }
})

export const { addPokemon, removePokemon } = pokemonSlice.actions

export default pokemonSlice.reducer