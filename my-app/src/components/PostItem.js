import React from 'react';
// import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";

export default function PostItem(props) {
  return (
    props.savedPosts.map(post => {
        const { name, title, description, image } = post;
        return <div className={css.SearchItem} key = {title}>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image}></img>
            <p>{description}</p>
        </div>
    })
  )
}
