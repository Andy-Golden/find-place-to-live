import { configureStore } from "@reduxjs/toolkit";

import { langReducer } from "./slices";

export const store = configureStore({
  reducer: { langReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
