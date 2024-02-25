import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    sideBarOpen:(state)=>{
        state.isMenuOpen=false;
    }
  },
});

export const { toggleMenu,sideBarOpen } = appSlice.actions;

export default appSlice.reducer;
