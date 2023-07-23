import toast from 'react-hot-toast';

import { fetchUser, fetchUserRepos, fetchUsers } from './thunks';
import { createSlice } from '@reduxjs/toolkit';
import { GitHubUser, GitHubUserDetails } from '../../../types/users';
import { GitHubRepository } from '../../../types/repositories';

interface GithubState {
  users: GitHubUser[];
  user: {
    data: GitHubUser | GitHubUserDetails | null,
    repositories?: GitHubRepository[]
  }
  loading: boolean;
}

const initialState: GithubState = {
  users: [],
  user: {
    data: null,
    repositories: []
  },
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
      state.user.data = action.payload;
    },
    setRepositories: (state, action) => {
      state.user.repositories = action.payload;
    }
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
      }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.user.data = {
          ...state.user,
          ...action.payload as GitHubUserDetails,
        };
      }),
      builder.addCase(fetchUser.rejected, (state) => {
        state.user.data = null;
        toast.error('Error fetching user', {
          position: 'top-right',
        });
      }),
      builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          repositories: action.payload as GitHubRepository[],
        }
      }),
      builder.addCase(fetchUserRepos.rejected, (state) => {
        state.user = {
          ...state.user,
          repositories: [],
        }
        toast.error('Error fetching user repos', {
          position: 'top-right',
        })
      })
  }
})

export const { setUsers, setUser, setRepositories } = counterSlice.actions

export default counterSlice.reducer