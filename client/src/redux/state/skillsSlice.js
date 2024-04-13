import { createSlice } from '@reduxjs/toolkit';

// Represents skills and images.
export const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    value: [],
  },
  reducers: {
    addSkills: (state, action) => {
      return { value: [...action.payload] };
    },
  },
});

export const { addSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
