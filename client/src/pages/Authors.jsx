import React, { useState } from "react";

const authorsData = [
  {
    id: 1,
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ana jo",
    posts: 3,
  },
  {
    id: 2,
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John do",
    posts: 2,
  },
  {
    id: 3,
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Emma lo",
    posts: 4,
  },
  {
    id: 4,
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ninja pi",
    posts: 5,
  },
  {
    id: 5,
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ketlin banjara",
    posts: 6,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section>
      <div>
        {authors.length > 0 ? (
          <div className="container mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {authors.map((author) => (
              <>
                <div className="bg-red-100 p-2 flex items-center gap-4">
                  <div>
                    <img
                      src={author.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{author.name}</p>
                    <small>{author.posts}</small>
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-2xl font-bold mt-5">
            No authors found
          </h2>
        )}
      </div>
    </section>
  );
};

export default Authors;
