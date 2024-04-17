import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StarWarsCharacterDetails = () => {
  const { id } = useParams(); // Obtener la ID del personaje desde la URL

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacter();

    return () => {
      // Cleanup if needed
    };
  }, [id]); // Dependencia para re-ejecutar el efecto cuando cambia la ID del personaje

  return (
    <div>
      <h1>Character Details</h1>
      {character ? (
        <div>
          <p>ID: {character.url}</p>
          <p>Name: {character.name}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Gender: {character.gender}</p>
          {/* Agrega más detalles según los campos disponibles en la respuesta de la API */}
        </div>
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default StarWarsCharacterDetails;