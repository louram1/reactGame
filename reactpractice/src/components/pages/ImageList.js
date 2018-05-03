import React from "react";

const ImageList = props => (
  <div className="imageList">
    {props.images.map(image => (
      <div onClick={function() { props.handleClick(image.id)}} className="image" style={{float: "left"}} key={image.id}><img width={100} src={image.url} /></div>
    ))}
  </div>
)

export default ImageList;