import { addPost } from "../features/posts/postsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { selecteAllUsers } from "../features/users/usersSlice";


const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContet] = useState('');

    const [userId, setUserId] = useState('')

    const users = useSelector(selecteAllUsers);

    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContet(e.target.value)
    const onAuthChange = e => setUserId(e.target.value)

    const onSavePost = () => {
        if(title && content){
            dispatch(
                addPost(
                    title,
                    content,
                    userId
                )
            )
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value= {user.id}>
            {user.name}
        </option>
    ))

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
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthChange}>
                    <option value=""></option>
                    {userOptions}
                </select>
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