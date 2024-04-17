import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectExample = () =>{
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        console.log('Component mounted');

        //Using fetch to get the data
        // fetch('https://rickandmortyapi.com/api/character')
        // .then((res) => res.json())
        // .then((data) => {
        //         setCharacters(data.results);
        //     })


        //Using axios to get the data
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
        setCharacters(response.data.results);
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });

        return ()=>{
            console.log('Component unmounted');
        }
    }, [])
    

    return(
        <div>
            <h1>Rick and Morty Characters</h1>
            <div>
                {characters.map((character, index) => (
                    <div key={index}>
                        <p>{character.name}</p>
                        <img src={character.image} alt={character.name} style={{ width: '100px' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UseEffectExample
