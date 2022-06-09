import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Dude Here"},
    { id: '1', name: "Maskoul Mo"},
    { id: '2', name: "Mike Tyson"},
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    }
})


export const selecteAllUsers = (state) => state.users;

export default usersSlice.reducer