import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getIdFromUrl, getPaginationLinks } from "../app/utils"; // Asegúrate de tener definidas estas funciones helper

const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [currentPage]); // Dependencia para re-ejecutar el efecto cuando cambia la página

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div>
        {characters.map((character, index) => (
          <div key={index}>
            <p>Name: {character.name}</p>
            <Link to={`/character/${getIdFromUrl(character.url)}`}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(character.url)}.jpg`}
                alt={character.name}
                style={{ width: '100px', height: '150px', objectFit: 'cover' }}
              />
            </Link>
          </div>
        ))}
      </div>
      <div>
        {getPaginationLinks(87, 10).map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePaginationClick(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarWarsCharacters;
