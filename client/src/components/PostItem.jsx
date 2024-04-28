import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
const PostItem = ({ postId, thumbnail, title, desc, authorId, category }) => {
  const shortDesc = desc.length > 50 ? desc.substr(0, 50) + "..." : desc;
  const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
  return (
    <article className="bg-white rounded-2xl">
      <div className="p-3">
        <div>
          <img src={thumbnail} alt={title} className="rounded-2xl" />
        </div>
        <div className="h-36 flex flex-col justify-between ">
          <div>
            <Link to={`/post/${postId}`}>
              <h3 className="font-bold">{shortTitle}</h3>
            </Link>
          </div>
          <p className="text-sm">{shortDesc}</p>
          <div className="flex  items-end justify-between">
            <PostAuthor />
            <Link
              className="text-xs bg-orange-300 rounded p-0.5"
              to={`/posts/categories/${category}`}
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
