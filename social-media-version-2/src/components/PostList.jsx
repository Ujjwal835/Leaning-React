import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
    const { postList,addInitialPosts } = useContext(PostListData);

    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data)=>{addInitialPosts(data.posts)});
    }

    return (
        <>
            {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick} />}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}
