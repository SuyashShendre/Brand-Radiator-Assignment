import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = navbarSlice.actions;
export default navbarSlice.reducer;
