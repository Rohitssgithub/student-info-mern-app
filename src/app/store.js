import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../Reducer/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
