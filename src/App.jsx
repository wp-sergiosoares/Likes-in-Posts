import { useState } from "react";
import "./App.css";

import { posts } from "./lib/posts";

function App() {
  const [postList, setPostList] = useState(posts);

  const handleLike = (id) => {
    // verificar se ja foi curtido ou nao
    // se foi subtrai um like senao adiciona 1 like
    const postsAtualizados = postList.map((post) => {
      if (post.id === id) {
        if (!post.liked) {
          return {
            ...post,
            likes: post.likes + 1,
            liked: true,
          };
        } else if (post.liked) {
          return {
            ...post,
            likes: post.likes - 1,
            liked: false,
          };
        }
      }
      return post;
    });
    console.log(postsAtualizados);
    setPostList(postsAtualizados);
  };

  return (
    <>
      <div className="relative flex h-screen items-center justify-center">
        <div className="min-w-md mx-auto space-y-5">
          <div className="text-3xl font-bold text-center">Likes em Posts</div>

          {postList && postList.length > 0 && (
            <div className="space-y-2">
              {postList.map((post, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center bg-gray-200 p-2 rounded-lg pl-4"
                >
                  <div className="flex-1 ">
                    <div className="text-lg">{post.titulo}</div>
                    <div className="text-gray-500">{post.likes} likes</div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleLike(post.id)}
                      className="bg-blue-500 px-4 py-2 text-white rounded-lg cursor-pointer w-35 hover:bg-blue-400"
                    >
                      {post.liked ? "desfazer like" : "like"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
