import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfThreads: {},
};

export const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    setThreads: (state, action) => {
      state.listOfThreads = action.payload;
    },
  },
});

export const { setThreads } = threadsSlice.actions;

export default threadsSlice.reducer;
