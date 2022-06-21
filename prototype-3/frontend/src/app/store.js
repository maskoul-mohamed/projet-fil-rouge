import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsSlice from "../features/posts/postsSlice";
import resumeSlice from "../features/resume/resumeSlice";
import usersSlice from "../features/users/usersSlice";
import authSlice from "../features/auth/authSlice";
import messageSlice from "../features/message/messageSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
        resume: resumeSlice,
        auth: authSlice,
        message: messageSlice
    }
})