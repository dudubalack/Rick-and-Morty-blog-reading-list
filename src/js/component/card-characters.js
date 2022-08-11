import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharaExtend = ({ character }) => {



  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={character.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text" >Estado:{character.status}</p>
                <p className="card-text" >Especie:{character.species}</p>
                <p className="card-text" >Genero:{character.gender}</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 