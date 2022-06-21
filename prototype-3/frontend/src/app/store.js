import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsSlice from "../features/posts/postsSlice";
import resumeSlice from "../features/resume/resumeSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
        resume: resumeSlice
    }
})