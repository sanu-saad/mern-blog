import React, { useState } from "react";
import { Link } from "react-router-dom";
const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail:
      "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "education",
    title: "Title no. 1",
    desc: "Education is more important our life",
    authorId: 1,
  },
  {
    id: "2",
    thumbnail:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "science",
    title: "Title no. 2",
    desc: "Science is a new role play in this time",
    authorId: 3,
  },
  {
    id: "3",
    thumbnail:
      "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "games",
    title: "Title no. 3",
    desc: "Game is more important our life for managing the health",
    authorId: 1,
  },
];

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="container mt-5">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {posts.map((post) => (
            <>
              <div className="bg-red-300 rounded p-2">
                <div className=" flex item-center justify-between">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="w-10 h-10 rounded"
                    />
                    <p className="font-bold">tilte</p>
                  </div>
                  <div className="flex item-center mt-3 gap-4 text-xs">
                    <Link to="/post/fdfdfd">
                      <button className="bg-green-700 px-2 rounded text-white">
                        View
                      </button>
                    </Link>
                    <Link to="/posts/gfgdf/edit">
                      <button className="bg-blue-700  px-2 rounded text-white">
                        Edit
                      </button>
                    </Link>
                    <Link to="/posts/gfgfdg/delete">
                      <button className="bg-red-600  px-2 rounded text-white">
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <h2>No Posts</h2>
      )}
    </section>
  );
};

export default Dashboard;
