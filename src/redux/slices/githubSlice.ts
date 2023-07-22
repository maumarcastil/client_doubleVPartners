import toast from 'react-hot-toast';

import { fetchUsers } from './thunks';
import { createSlice } from '@reduxjs/toolkit';
import { GitHubUser } from '../../types/users';

interface GithubState {
  users: GitHubUser[];
  user: GitHubUser | null;
  loading: boolean;
}

const initialState: GithubState = {
  users: [],
  user: null,
  loading: false
}

export const counterSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.items as GitHubUser[];
    }),
      builder.addCase(fetchUsers.rejected, (state) => {
        state.users = [];
        toast.error('Error fetching users', {
          position: 'top-right',
        });
      })
  }
})

export const { setUsers, setUser } = counterSlice.actions

export default counterSlice.reducer