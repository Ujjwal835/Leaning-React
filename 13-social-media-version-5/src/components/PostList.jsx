import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
  const postList = useLoaderData();

  return (
    <div>
      {postList.length === 0 && <WelcomeMessage />}
      <div className="middle-section-middle">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
