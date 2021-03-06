import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeTemplate:1,
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
    languages:[{
        language:"",
        level:""
    }],
    interests:[null]
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
        addLanguages: (state, action) => {
            state.languages = action.payload
        },
        addInterests: (state, action) => {
            state.interests = action.payload
        },
    }
})


export const { 
        addEducation, 
        addPersonalInfo, 
        addExperience,
        addSkills,
        addProfile,
        addLanguages,
        addInterests
    } = resumeSlice.actions;
export default resumeSlice.reducer