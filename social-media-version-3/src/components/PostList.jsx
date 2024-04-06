import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
    const { postList, addInitialPosts } = useContext(PostListData);
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
            });
    }, [])



    //   automatically loading the dummy post using state managemnet useState
    //   const [dataFetched, setDataFetched] = useState(false);

    //   if (!dataFetched) {
    //     fetch("https://dummyjson.com/posts")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         addInitialPosts(data.posts);
    //       });
    //     setDataFetched(true);
    //   }

    return (
        <>
            {postList.length === 0 && (
                <WelcomeMessage />
            )}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}
