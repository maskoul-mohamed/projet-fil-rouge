import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = [
    {
        id:1,
        title: "Holaaa!",
        content: "some constent here!!!!"
    },
    {
        id:2,
        title: "Second tile",
        content: "Lorem epsume jkfjdskssf"
    }
]


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        addPost:{
            reducer (state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return {
                    payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
                }
            }
        }       
    }
})

export const selecteAllPosts = state => state.posts;

export const { addPost } = postsSlice.actions

export default postsSlice.reducer;
