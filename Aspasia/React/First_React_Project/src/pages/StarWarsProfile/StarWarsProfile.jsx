import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getCharacterById, getFilmsFromUrls, } from '../../app/services/servicesStarWars';
import {Row} from './StarWarsProfile.styles';

const StarWarsProfile = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getCharacterById(id).then((data) => {
      setCharacterData(data);
      getFilmsFromUrls(data.films).then(setFilms);
    });
  }, [id]);

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
          </div>
          <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt="imagen" />
        </Row>

      }
    </div>
  );
};

export default StarWarsProfile;