import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './createSlice';

// export default store = createStore(reducer)
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})