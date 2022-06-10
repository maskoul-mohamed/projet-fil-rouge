import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo: {
        firstName:"",
        lastName:"",
        postPosition:"",
        email:"",
    },
    experiences: [],
    education: [{
        id:1,
        title: "Lorem",
        description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf"
    }],
    skills:[],
    others:[]
}


const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        addEducation: (state, action) => {
            state.education = action.payload
        }
    }
})


export const { addEducation } = resumeSlice.actions;
export default resumeSlice.reducer