import { createAsyncThunk } from '@reduxjs/toolkit'
import octokit from '../../../config/octokit'

export const fetchUsers = createAsyncThunk(
  'github/fetchUsers',
  async (query: string, thunkApi) => {
    try {
      const response = await octokit.request('GET /search/users', {
        q: query,
        per_page: 10,
      })
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }

  }
)

export const fetchUser = createAsyncThunk(
  'github/fetchUser',
  async (username: string, thunkApi) => {
    try {
      const response = await octokit.request('GET /users/{username}', {
        username,
      })
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const fetchUserRepos = createAsyncThunk(
  'github/fetchUserRepos',
  async (username: string, thunkApi) => {
    try {
      const response = await octokit.request('GET /users/{username}/repos', {
        username,
        per_page: 10
      })
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)