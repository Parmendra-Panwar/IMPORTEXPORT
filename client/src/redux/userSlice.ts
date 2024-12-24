import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    _id: string;
    email: string;
    username: string;
    orders: { item: string; quantity: number }[];
  } | null;
}

const initialState: UserState = {
  user: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        _id: string;
        email: string;
        username: string;
        orders: { item: string; quantity: number }[];
      }>
    ) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
