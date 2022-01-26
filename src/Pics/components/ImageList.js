import "../ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

function ImageList(props) {
  // console.log(props.images);
  const images = props.images.map((image) => {
    // return <img key={id} src={urls.regular} alt={description} />;
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
}

export default ImageList;
