import { useState } from "react";
import { useSelector } from "react-redux";
import { selecteAllPosts } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(selecteAllPosts);
   

    const renderedPost = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostAuthor userId={post.userId} />
        </article>
    ))

    return (
        <div>
            {renderedPost}
        </div>
    )
}


export default PostsList;