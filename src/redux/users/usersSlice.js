import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const req = await fetch('https://randomuser.me/api/?results=5')
    const resp = await req.json()
    const data = await resp.results
    return data
})

const initialState = {
  users: [],
  isLoading: false,
  error: false
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.users = payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export default usersSlice.reducer
