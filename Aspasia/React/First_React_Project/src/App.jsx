// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { useRef } from 'react';
import { useState } from 'react';
import Component_A from './components/component_A';
import Component_B from './components/component_B';
import Component_C from './components/component_C';
import Book from './components/Book';

const ANIMAL_IMAGES = {
  img1: "http://via.placeholder.com/111x111",
  img2: "http://via.placeholder.com/222x222",
  img3: "http://via.placeholder.com/333x333",
  };

function App() {
  const num1 = useRef();
  const num2 = useRef();
  const resultadoRef = useRef();

  const procesar = () => {
    const valor = num1.current.value * num2.current.value;
    resultadoRef.current.innerHTML = valor;
  }

  const [inputText, setInputText] = useState('');
  const [valorAMostrar, setValorAMostrar] = useState(0);

  const [image, setImage] = useState('');

  return (
    <>
    {/* Ex1 UseRef*/}
      <div>
        <input type="number" ref={num1} />
        <input type="number" ref={num2} />
        <button onClick={procesar}>Enviar</button>
        <div ref={resultadoRef}> El resultado es:</div>
      </div>
      <br />

    {/* Ex2 Use State*/}
      <div>
        <input type="text" onChange={e=> setInputText(e.target.value)} />
        <button onClick={() => setValorAMostrar(inputText)}>Cambiar valor</button>
        <div>{valorAMostrar}</div>
      </div>
      <br />

      {/* Ex3 Image loading Use State*/}
      <div>
        <button onClick={() => setImage(ANIMAL_IMAGES.img1)}>Img1</button>
        <button onClick={() => setImage(ANIMAL_IMAGES.img2)}>Img2</button>
        <button onClick={() => setImage(ANIMAL_IMAGES.img3)}>Img3</button>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <br />

      {/* Ex4 Components*/}
      <div>
        <Component_A></Component_A>
        <Component_B></Component_B>
        <Component_C></Component_C>
      </div>
      <br />

      {/* Ex5 Props (father to child)*/}
      <div>
        <Book book="Hyperion" />
      </div>
      <br />
      {/* Ex6 Props (both ways*/}
      <div>
        
      </div>
    </>
  )
}

export default App
