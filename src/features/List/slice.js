import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchList = createAsyncThunk(
  'list/fetchList',
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
  }
)

const initialState = {
    list: [],
    status: "loading"
}

const listSlice = createSlice({
    name: "list",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchList.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = "success";
        })
    }
})

export const selectList = state => state.listReducer

export default listSlice.reducer;
