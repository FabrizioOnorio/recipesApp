import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
    name: 'ingredientsList',
    initialState: [''],
    reducers: {
      addIngredient(state, action) {
        state.push(action.payload)
      }
    }
  },
)

export const { addIngredient } = recipesSlice.actions
export default recipesSlice.reducer;
