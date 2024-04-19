import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getCharacterById, getFilmsFromUrls, getSpeciesFromId} from '../../app/services/servicesStarWars';
import {Row} from '../../app/styles/stylesStarWars';

const StarWarsProfile = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getCharacterById(id).then((data) => {
      setCharacterData(data);
      getFilmsFromUrls(data.films).then(setFilms);
    });
  }, []);

  return (
    <div>
      {
        characterData && <Row>
          <div>
            <h1>{characterData.name}</h1>
            <p>Height: {characterData.height}</p>
            <p>Gender: {characterData.gender}</p>
            <p>Hair Color: {characterData.hair_color}</p>
            <p>Skin: {characterData.skin_color}</p>
            <h2>Films</h2>
            <ul>
                {
                    films.map((obj, i) => <li key={i}>{obj.title}</li>)
                }
            </ul>
            <h2>Species</h2>
            <ul>
                {
                    species.map((obj, i) => <li key={i}>{obj.name}</li>)
                }
            </ul>
          </div>
          <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt="imagen" />
        </Row>

      }
    </div>
  );
};

export default StarWarsProfile;