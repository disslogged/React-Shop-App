import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
  reducer: {
    checkout: checkoutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
