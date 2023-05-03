import { configureStore } from "@reduxjs/toolkit";
import navbar from "./navbar";

const store = configureStore({
  reducer: {
    app: navbar,
  },
});

export default store;
