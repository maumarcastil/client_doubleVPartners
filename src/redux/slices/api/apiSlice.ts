import { createSlice } from "@reduxjs/toolkit";
import { GitHubUserDetails } from "../../../types/users";
import { createUser, fetchUserbyUsername } from "./thunks";
import toast from "react-hot-toast";

interface ApiState {
  loading: boolean;
  user: GitHubUserDetails | null | undefined;
}

const initialState: ApiState = {
  loading: false,
  user: undefined,
}

export const slice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserbyUsername.fulfilled, (state, action) => {
      state.user = action.payload.data
    }),
      builder.addCase(fetchUserbyUsername.rejected, (state) => {
        state.user = null;
      }),
      builder.addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.data
      }),
      builder.addCase(createUser.rejected, (state, action) => {
        if (action.error.message) {
          toast.error(action.error.message, {
            position: 'top-right',
          })
        }
      })
  }
})

export const { setUser } = slice.actions;

export default slice.reducer;