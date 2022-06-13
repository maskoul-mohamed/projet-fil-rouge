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
    experience: [{
        jobTitle: "",
        state: "",
        employer:"",
        city:"",
        startDate: null,
        endDate:null,
        description:"",
    }],
    education: [{
        schoolName: "",
        location: "",
        degree:"",
        fieldOfStudy:"",
        startDate: null,
        endDate:null,
        description:"",
    }],
    skills:[null],
    profile:"",
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
        },
        addExperience: (state, action) => {
            state.experience = action.payload
        },
        addSkills: (state, action) => {
            state.skills = action.payload
        },
        addProfile: (state, action) => {
            state.profile = action.payload
        },
    }
})


export const { 
        addEducation, 
        addPersonalInfo, 
        addExperience,
        addSkills,
        addProfile
    } = resumeSlice.actions;
export default resumeSlice.reducer