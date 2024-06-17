import { createSlice } from "@reduxjs/toolkit";

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

const globalSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    addToCount: (state: State) => {
      state.counter = state.counter + 1;
    },
  },
});

export const { addToCount } = globalSlice.actions;
export default globalSlice.reducer;
