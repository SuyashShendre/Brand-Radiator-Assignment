import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";

const store = configureStore({
  reducer: {
    app: navbarSlice,
  },
});

export default store;
