import { useEffect, useState } from "react";
import { getPeople } from "../../app/services/people";
import { Grid } from "./Home.styles";
import { getIdFromUrl } from "../../app/utils";
import { Link, useParams } from "react-router-dom";

const Home = () => {
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
    <div>{id}
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
          return <Link to={"/" + (i + 1)}>{i + 1}</Link>
        })
      }
    </div>
  )
}

export default Home;