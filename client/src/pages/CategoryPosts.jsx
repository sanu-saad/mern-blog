import React from "react";

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

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
      {posts.map(({ id, thumbnail, title, desc, authorId, category }) => (
        <PostItem
          key={id}
          postId={id}
          thumbnail={thumbnail}
          title={title}
          desc={desc}
          authorId={authorId}
          category={category}
        />
      ))}
    </section>
  );
};

export default CategoryPosts;
