import React from "react";
 
import PostCard from "./PostCard";
//import postIcon from "img/money-bag.svg";

const UserPosts = (props) => {
  //  const posts = { ...props };

  // Data will come from an api Later
  const posts = [
    {
      id: 1,
      postTitle: "Post Title",
      postBody:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque obcaecati magnam maxime fugit error voluptatem placeat nesciunt assumenda eveniet consectetur amet ratione dolore id perferendis suscipit eum, ut neque.",
      postIcon: "img/money-bag.svg",
      postDateTime: "17:50 | 25 Dec 2020",
      postType: "maintenance",
    },
    {
      id: 2,
      postTitle: "Post Title",
      postBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eius delectus quidem numquam voluptatem voluptatum. Fugit soluta voluptatibus provident ut nesciunt, quo, minima error repellat eius sunt harum culpa id. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque obcaecati magnam maxime fugit error voluptatem placeat nesciunt assumenda eveniet consectetur amet ratione dolore id perferendis suscipit eum, ut neque.",
      postIcon: "img/money-bag.svg",
      postDateTime: "17:50 | 25 Dec 2020",
      postType: "overdue",
    },
    {
      id: 3,
      postTitle: "Post Title",
      postBody:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque obcaecati magnam maxime fugit error voluptatem placeat nesciunt assumenda eveniet consectetur amet ratione dolore id perferendis suscipit eum, ut neque.",
      postIcon: "img/money-bag.svg",
      postDateTime: "17:50 | 25 Dec 2020",
      postType: "offers",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
  ];

  return (
    <div id="vertical-timeline" className="vertical-container light-timeline searchable">
      {posts.map((postItem) => {
        return <PostCard key={postItem.id} {...postItem} />;
      })}
    </div>
  );
};

export default UserPosts;
