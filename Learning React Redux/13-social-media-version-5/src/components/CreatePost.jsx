import { Form, redirect } from "react-router-dom";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
export default function CreatePost() {

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label text-bg-side">
          User ID{" "}
        </label>
        <input
          type="text "
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter Your User ID here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label text-bg-side">
          Post Title
        </label>
        <input
          type="text "
          name="title"
          className="form-control"
          id="title"
          placeholder="How Are You Feeling Today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label text-bg-side">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text "
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label text-bg-side">
          Number of Reactions{" "}
        </label>
        <input
          type="text "
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label text-bg-side">
          Tags{" "}
        </label>
        <input
          type="text "
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter your Hash tags here using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
