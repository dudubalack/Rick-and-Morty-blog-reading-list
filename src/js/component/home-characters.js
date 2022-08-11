import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharactersHome = ({ character }) => {
  return (
    <>
      <div className="card ">
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">Estado:{character.status}</p>
          <p className="card-text">Especie:{character.species}</p>
          <p className="card-text">Genero:{character.gender}</p>
        </div>
        <div className="card-body">
          {" "}
          {/* Aquí van los botones de la carta: ir al personaje y favoritos */}
          <Link to={`/charextend/${character.id}`} className="card-link">
            ¡Quiero más!
          </Link>
          <br></br>
          <Link
            to=""
            onclick={() => onAddFavorite(character.id)}
            className="card-link"
          >
            {" "}
            I love´t!
          </Link>
        </div>
      </div>
    </>
  );
};
