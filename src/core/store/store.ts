import { isDevMode } from "@/types/enviroments";
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  devTools: isDevMode(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
