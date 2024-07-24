import React from "react";
import { Col } from "react-bootstrap";

export const Cards = ({ title, description, imgUrl }) => {
  const openImageInNewTab = () => {
    window.open(imgUrl, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={openImageInNewTab}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
