import { createSlice } from "@reduxjs/toolkit";

const navbar = createSlice({
  name: "navbar",
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

export const { toggleMenu, closeMenu } = navbar.actions;
export default navbar.reducer;
