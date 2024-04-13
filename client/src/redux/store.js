import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './state/skillsSlice';

export default configureStore({
  reducer: {
    skills: skillsReducer,
  },
});
