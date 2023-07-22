import { createAsyncThunk } from '@reduxjs/toolkit'
import octokit from '../../config/octokit'

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

