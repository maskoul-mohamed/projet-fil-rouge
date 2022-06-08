import { addPost } from "../features/posts/postsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";



const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContet] = useState('');

    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContet(e.target.value)

    const onSavePost = () => {
        if(title && content){
            dispatch(
                addPost(
                    title,
                    content
                )
            )
        }
    }
    return (
        <div>
            <section>Add a New Post</section>
            <form>
                 <label>Post Title</label>
                <input 
                    type="text"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <br/>
                <br/>
                <br/>
                <label>Post Content</label>
                <input 
                    type="text"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button onClick={onSavePost} type="button">Save Post</button>
            </form>
        </div>
    )
}


export default AddPost;