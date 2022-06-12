import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo: {
        firstName:"",
        lastName:"",
        postTitle:"",
        email:"",
        phone:"",
        address: "",
        state:"",
        city:"",
        zip:"",
        image:""
    },
    experiences: [],
    education: [{
        id:1,
        title: "Lorem",
        description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf",
        startDate: null
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
        },
        addPersonalInfo: (state, action) => {
            state.personalInfo = action.payload
        }
    }
})


export const { addEducation, addPersonalInfo } = resumeSlice.actions;
export default resumeSlice.reducer