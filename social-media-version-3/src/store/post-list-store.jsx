import { useCallback } from "react";
import { createContext, useReducer } from "react";

//defining so that whenever used it can do auto complete
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

// Normal react component PostListProvider takes children and wraps it in PostList.provider and render it
const PostListProvider = ({ children }) => {
  const [postList, DispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle}  ${postBody} ${reactions} ${tags}`);
    DispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    DispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };


  //used call back here what happen is that whenever the parent gets repainted so do the child even though child has nothig to change which adds in more repainting thus to avoid that we use callback that help by saying if thereis change in child then only child should be repainted 
  const deletePost = useCallback(
    (postId) => {
      DispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [DispatchPostList]
  );

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
