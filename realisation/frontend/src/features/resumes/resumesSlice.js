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

  export const getResumes = createAsyncThunk(
    "resumes/get",
    async ( thunkAPI) => {
      try {
        const data = await resumeService.getResumes();
        console.log(data)

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
const initialState = { resumes:[]}


const resumesSlice = createSlice({
    name: "resumes",
    initialState,
    reducers: {
        addResumes:(state, action) => {
            state.resumes = action.payload

        }
    }
})


export const { 
    addResumes, 
        
    } = resumesSlice.actions;
export default resumesSlice.reducer