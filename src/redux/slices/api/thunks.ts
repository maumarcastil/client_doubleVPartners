import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../config/axios'
import { GitHubUserDetails } from "../../../types/users";

export const fetchUserbyUsername = createAsyncThunk(
  'api/fetchUser', 
  async (username: string, thunkApi) => {
    try {
      const response = await axios.get(`/github-users/username/${username}`)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  })

export const createUser = createAsyncThunk(
  'api/createUser',
  async (user: GitHubUserDetails, thunkApi) => {
    try {
      const response = await axios.post('/github-users', user)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  })