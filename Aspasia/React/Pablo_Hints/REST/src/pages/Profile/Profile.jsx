import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCharacterById, getFilmsFromUrls } from "../../app/services/people";
import { Container } from "./Profile.styles";

const Profile = () => {
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id).then((data) => {
      setCharacter(data);
      getFilmsFromUrls(data.films).then(setFilms);
    });
  }
    , []);

  return (
    <Container>
      <div>
        <div>Profile {id}

          <p>Nombre: {character.name}</p>
          <p>Altura: {character.height}</p>
          <p>Peso: {character.mass}</p>

          <h2>Films</h2>
          {
            films.map(film => {
              return (
                <div key={film.episode_id}>
                  <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
                  <p>{film.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
      </div>
    </Container>
  )
}

export default Profile