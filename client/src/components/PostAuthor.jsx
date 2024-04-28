import React from "react";
import { Link } from "react-router-dom";
const PostAuthor = () => {
  return (
    <Link>
      <div className="flex items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <h5 className="text-xs font-bold">By: Sanu</h5>
          <small className="text-xs">Just Now</small>
        </div>
      </div>
    </Link>
  );
};

export default PostAuthor;
