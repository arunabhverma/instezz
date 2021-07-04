import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'login',
  initialState: {
    value: 0,
    loginEmail: '',
    loginPsd: '',
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    },
    login: (state, action) => {
      state.loginEmail = action.payload.email;
      state.loginPsd = action.payload.pass;
    }
  }
})
export const { increment, decrement, login } = counterSlice.actions
export default counterSlice.reducer