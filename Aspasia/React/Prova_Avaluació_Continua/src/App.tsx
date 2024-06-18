import { useRef, useState } from 'react'
import './App.css'

import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';

function App() {
  const inputNum = useRef<HTMLInputElement>(null);
  const outputNum = useRef<HTMLParagraphElement>(null);

  const [value, setValue] = useState<number>(0);
  const [characterName, setCharacterName] = useState<string>('');
  const [characterImage, setCharacterImage] = useState<string>('');

  const handleInputChange = async () => {
    if (inputNum.current && outputNum.current) {
      const currentValue = parseInt(inputNum.current.value, 10);
      setCharacterName('');
      setCharacterImage('');

      if (currentValue < 1 || currentValue > 10) {
        outputNum.current.textContent = `El valor introduït (${currentValue}) està fora del rang permès (1-10).`;
      } 
      else 
      {
        console.log(currentValue);
        outputNum.current.textContent = `El valor introduït és: ${currentValue}`;

        setValue(currentValue);

        try {
          const response = await fetch(`https://swapi.dev/api/people/${currentValue}/`);
          const data = await response.json();
          setCharacterName(data.name);
          setCharacterImage(`https://starwars-visualguide.com/assets/img/characters/${currentValue}.jpg`);
        } catch (error) {
          console.error('Error fetching data:', error);
          setCharacterName('Error fetching data');
          setCharacterImage('');
        }
      }
    }
  };

  return (
    <div>
      <h1>Pol Bosch Matesanz</h1>
      <h1>Prova Avaluació Continua 17/06</h1>
      <h2>Exercici 1: Introdueix un número entre l'1 i el 10:</h2>
      <input
        type="number"
        ref={inputNum}
        onChange={handleInputChange}
        min="1"
        max="10"
      />
      <p ref={outputNum}>El valor introduït és:</p>

      <h2>Exercici 2: Componente1 que mostri el text “Hola Món”</h2>
      <Componente1 />

      <h2>Exercici 3.1: Componente2 que mostri el valor introduït a l'exercici 1 i fer una petició a la API de starwars (https://swapi.dev/) i recuperar la propietat name corresponent al número introduït</h2>
      <Componente2 value={value} characterName={characterName} characterImage={characterImage}/>
    </div>
  );
}

export default App;
