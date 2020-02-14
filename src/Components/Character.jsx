import React from "react";

import "./Styles.css";

const character = props => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    location,
    image
  } = props.characterInfo;

  return (
    <div className="character_card">
      <div className="title_section">
        <div className="title_image_section">
          <img src={image} />
        </div>
        
        <div className="title_section_text">
          
          <h1>{name}</h1>
        </div>
      </div>
      <div className="info_section">
        <div className="info_item">
          <span>Situación</span>
          <p>{status}</p>
        </div>
        <div className="info_item">
          <span>especie</span>
          <p>{species}</p>
        </div>
        <div className="info_item">
          <span>Género</span>
          <p>{gender}</p>
        </div>
        <div className="info_item">
          <span>Origen</span>
          <p>{origin.name}</p>
        </div>
        <div className="info_item">
          <span>Última localización</span>
          <p>{location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default character;
