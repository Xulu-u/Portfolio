import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { getIdFromUrl } from "../../app/utils"; // Asegúrate de tener definidas estas funciones helper
import { getPeople } from '../../app/services/servicesStarWars';
import { Grid } from "./StarWars.Styles";

const StarWars = () => {
  const [people, setPeople] = useState([]);
  const [pagesAmount, setPagesAmount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getPeople(id).then(data => {
      const n = data.count / 10;
      setPagesAmount(Math.ceil(n));
      setPeople(data.results)
    });
  }, [id]);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div>
        <Grid>
        {
          people.map(person => {
            const characterId = getIdFromUrl(person.url)
            return (
              <Link to={`profile/${characterId}`} key={person.id}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt="" />
                {person.name}
              </Link>
            )
          })
        }
      </Grid>
      {
        Array(pagesAmount).fill().map((page, i) => {
          return <Link key={i} to={"/" + (i + 1)}>{i + 1}</Link>
        })
      }
      </div>
    </div>
  );
};

export default StarWars;