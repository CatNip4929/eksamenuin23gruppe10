import React, { useState, useEffect } from "react";
import { TagCloud } from 'react-tagcloud'

export default function GameTag({ categories }) {
    const [tags, setTags] = useState([]);
  
    //Pusher ut tags ut ifra spilldataen til sanity
    useEffect(() => {
      let gamesTags = [];
      categories.forEach(category => {
        gamesTags.push({ value: category.category_title});
      });
      setTags(gamesTags);
    }, [categories]);
  
    return (
        <TagCloud
        minSize={12}
        maxSize={35}
        tags={tags}
        className="simple-cloud"
        onClick={(tag) => alert(`'${tag.value}' er valgt!`)}
      />
    );
}

//Kilde TagCloud: https://www.npmjs.com/package/react-tagcloud