import { createSlice } from '@reduxjs/toolkit';

interface GithubState {
  users: [];
}

const initialState: GithubState = {
  users: [],
}

export const counterSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
})

export const { setUsers } = counterSlice.actions

export default counterSlice.reducer