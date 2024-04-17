import {useParams, Link} from 'react-router-dom';
import StarWarsCharacters from '../components/StarWarsCharacters';


const StarWars = () => {

const { id } = useParams();


    return(
        <div>
            <StarWarsCharacters/>
        </div>
)
}

export default StarWars;
