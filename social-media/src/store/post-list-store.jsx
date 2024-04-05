import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
};

// Normal react component PostListProvider takes children and wraps it in PostList.provider and render it
const PostListProvider = ({ children }) => {
    const [postList, DispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        console.log(`${userId} ${postTitle}  ${postBody} ${reactions} ${tags}`)
        DispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,

            }
        })
    };
    const deletePost = (postId) => {
        DispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
        <PostList.Provider
            value={{
                postList,
                addPost,
                deletePost,
            }}
        >
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going To Mumbai",
        body: "Hi friends i am going to mumbi for my vacation. Hope to Enjoy a lot. Peace Out",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
        id: "2",
        title: "Pass Ho Bhai",
        body: "4 saal ki masti ke baad ho gae hai paas",
        reactions: 15,
        userId: "user-12",
        tags: ["Graduationg", "Unbelievabble"],
    },
];

export default PostListProvider;
