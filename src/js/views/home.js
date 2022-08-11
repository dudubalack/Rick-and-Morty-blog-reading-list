import rigoImage from "../../img/rigo-baby.jpg";
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { CharactersHome } from "../component/home-characters";
import { LocationHome } from "../component/home-location";

const Home = () => {
  const [characters, setcharacters] = useState([]);
  {
    /* todo lo relacionado con el apartado personajes */
  }
  {
    /* llamada a la API */
  }
  {
    /* actualización de la variable characters */
  }
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        console.log(data);
      });
  }, []);
  {
    /* [] para que se ejecute solo una vez cuando cargue la pagina */
  }

  const characterHtml = characters.map((character, index) => {
    return <CharactersHome character={character} key={index} />;
  });

  const [locations, setlocations] = useState([]);
  {
    /* todo lo relacionado con el apartado lugares */
  }
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        setlocations(data.results);
        console.log(data);
      });
  }, []);

  const locationHtml = locations.map((location, index) => {
    return <LocationHome location={location} key={index} />;
  });

  return (
    <div className=" mt-5 ">
      <div className="text-left">
        <h1>Personajes</h1>
      </div>
      <div className="cardCharacters text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3 w-50 h-50 m-auto ">
        {characterHtml}
      </div>
      <div className="text-left">
        <h1>Lugares</h1>
      </div>
      <div className="cardCharacters text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3 w-50 h-50 m-auto ">
        {locationHtml}
      </div>
    </div>
  );
};

export default Home;
