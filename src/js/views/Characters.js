import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { CharaExtend } from "../component/card-characters";

const CharactersExtended = () => {
  const params = useParams();
  const [charExtended, setcharextended] = useState({});
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
    fetch("https://rickandmortyapi.com/api/character/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setcharextended(data);
        console.log(data);
      });
  }, [params.id]);
  {
    /* [] para que se ejecute solo una vez cuando cargue la pagina */
  }

  return (
    <div className=" mt-5 ">
      <CharaExtend character={charExtended} />
    </div>
  );
};

export default CharactersExtended;
