import { useState } from "react";
import { useSelector } from "react-redux";
import { selecteAllPosts } from "../features/posts/postsSlice";

const PostsList = () => {
    const posts = useSelector(selecteAllPosts);
   

    const renderedPost = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ))

    return (
        <div>
            {renderedPost}
        </div>
    )
}


export default PostsList;