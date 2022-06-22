import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resumeService from "../../services/resume.service";
import { setMessage } from "../message/messageSlice";

export const addResume = createAsyncThunk(
    "resume/add",
    async ( resume, thunkAPI) => {
      try {
        const data = await resumeService.addResume(resume);
        return { resume: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

const initialState = {
    resume: {
        templateName:'template1'
    },
    personalInformation: {
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
        name:"",
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
            state.personalInformation = action.payload
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