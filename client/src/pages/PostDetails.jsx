import React from "react";
import { useParams } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
const PostDetails = () => {
  // const { id } = useParams();
  // console.log(id);
  return (
    <section className="container mt-5 ">
      <div className="bg-red-100 rounded">
        <div className="p-2">
          <div className="flex justify-between">
            <div>
              <PostAuthor />
            </div>
            <div className="flex gap-2 items-center">
              <Link to="/posts/dfdsf/edit">
                <button className="bg-gray-700 p-0.5 text-white text-sm rounded">
                  Edit
                </button>
              </Link>
              <Link to="/posts/dfsgf/delete">
                <button className="bg-red-700 p-0.5 text-white text-sm rounded">
                  Delete
                </button>
              </Link>
            </div>
          </div>
          <h2 className="mt-5 font-bold">Title</h2>
          <div>
            <img
              src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            molestiae inventore corporis ab exercitationem neque veniam soluta
            unde cum odit voluptatem, modi ex debitis culpa, accusantium ipsum!
            Omnis, illum vitae? Officiis vel pariatur laboriosam odio explicabo
            nemo hic eos minima tempora fugiat? Ducimus autem soluta modi magni
            alias corrupti, nam, ullam distinctio voluptates culpa maxime
            exercitationem cum labore assumenda at quidem, eius ratione ab nemo
            beatae libero iusto laboriosam perferendis. Doloremque aliquam,
            cumque dolorum corrupti provident alias libero placeat tenetur
            excepturi iste sequi, dignissimos perferendis magnam. Placeat
            obcaecati asperiores exercitationem quae sunt eius cumque alias
            molestias, dignissimos facilis tempore explicabo animi ullam
            deleniti libero repudiandae dolore labore. Iusto ipsa cupiditate
            odit hic suscipit tempore debitis ipsum nam itaque. Accusantium
            similique doloribus autem molestiae eius inventore sequi nam atque,
            obcaecati porro. Quasi iste rem corporis placeat sint minima, magni
            ipsa neque commodi pariatur omnis corrupti. Excepturi officia dicta,
            magni veritatis quaerat non quo aperiam tempora voluptate
            consequatur numquam nostrum at doloribus illo fuga autem ex vel eius
            et distinctio tempore dolore nobis! Impedit similique possimus eos,
            magni est amet, dignissimos neque quas sint minima distinctio
            necessitatibus autem corporis. Dicta dolore reprehenderit ex
            inventore facere quidem, facilis laudantium quasi ipsam molestiae
            rerum commodi quia in dolorum cumque iste numquam? Distinctio
            reprehenderit pariatur illo ipsum, facere nemo sint qui perferendis
            fuga temporibus unde, laboriosam quam aperiam facilis accusamus
            eligendi, id eaque repellendus velit earum. Earum ullam a velit
            veritatis vel autem voluptatem, est tempore nulla unde itaque
            repudiandae fuga laborum quo sunt mollitia alias minus assumenda
            quis eligendi? Veniam blanditiis illum harum aut fugit quibusdam
            tempora fugiat minima? Suscipit harum omnis perferendis, nihil,
            earum nostrum amet repudiandae modi delectus quibusdam incidunt
            doloribus dignissimos error! Ratione earum, officia, unde at veniam
            id officiis necessitatibus eos perferendis laudantium possimus
            excepturi nulla. Dicta commodi recusandae inventore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
