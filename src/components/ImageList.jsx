import React from "react";
import "../StyleImage.css";
import ImageCard from "./ImageCard";

const ImagesList = (props) => {
  console.log(props.dataImg);

  const ImageRender = () => {
    return props.dataImg.map((val) => {
      console.log(val);
      return <ImageCard data={val} key={val.id} />;
    });
  };

  return <div className="img-list">{ImageRender()}</div>;
};

export default ImagesList;
