import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    name: "",
    email: ""
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        set(state, {payload}) {
            state.username = payload.username;
            state.name = payload.name;
            state.email = payload.email;
        }
    }
})

export const {set} = detailSlice.actions
export const selectDetail = state => {
    return state.detailReducer
}

export default detailSlice.reducer;
