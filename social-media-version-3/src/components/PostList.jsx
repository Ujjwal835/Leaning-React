import { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
    const { postList, addInitialPosts } = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);

        //to clean up the api we are using abortcontroller
        const controller = new AbortController()
        const signal = controller.signal

        fetch("https://dummyjson.com/posts", { signal })
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
                setFetching(false);
            });
        // this is the cleanup function means whenever this useffect or the call is getting murder then this cleanup will be called
        // cleaning up the api
        return () => {
            controller.abort();
        }
    }, []);

    //   automatically loading the dummy post using state management useState
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
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}
