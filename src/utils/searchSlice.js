import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {

  },
  reducers: {
    cacheInsert: (state, acion) => {
      state = Object.assign(state, acion.payload);
    },
  },
});


export const {cacheInsert}=searchSlice.actions;

export default searchSlice.reducer;
