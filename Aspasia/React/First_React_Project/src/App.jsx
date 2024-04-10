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
import MultiplyTwoNumbers from './components/MultiplyTwoNumbers';
import PrintResult from './components/PrintResult';
import PlusMinusNum from './components/PlusMinusNum';
import images from './data/images';
import { Box, BoxChange } from './app/styles';



const ANIMAL_IMAGES = {
  img1: "http://via.placeholder.com/111x111",
  img2: "http://via.placeholder.com/222x222",
  img3: "http://via.placeholder.com/333x333",
  };

const reactLogo = './assets/react.svg'

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

  const [result, setResult] = useState(0);

  const [val, setVal] = useState(0);

  const imgResult = images.map(obj => ( 
    <div key={obj.title}>
      {obj.title} 
      <br />
      <img src={obj.img} alt="" />
    </div>
  ))

  const [boxColor, setBoxColor] = useState('')

  return (
    <>
    {/* Ex1 UseRef*/}
      <div>
        <h2>Ex1 useRef</h2>
        <input type="number" ref={num1} />
        <input type="number" ref={num2} />
        <button onClick={procesar}>Enviar</button>
        <div ref={resultadoRef}> El resultado es:</div>
      </div>
      <br />

    {/* Ex2 UseState*/}
      <div>
        <h2>Ex2 useState</h2>
        <input type="text" onChange={e=> setInputText(e.target.value)} />
        <button onClick={() => setValorAMostrar(inputText)}>Cambiar valor</button>
        <div>{valorAMostrar}</div>
      </div>
      <br />

      {/* Ex3 Image loading Use State*/}
      <div>
        <h2>Ex3 Image loading useState</h2>
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
        <h2>Ex4 Components</h2>
        <Component_A></Component_A>
        <Component_B></Component_B>
        <Component_C></Component_C>
      </div>
      <br />

      {/* Ex5 Props (father to child)*/}
      <div>
        <h2>Ex5 Props (ather to child)</h2>
        <Book book="Hyperion" />
      </div>
      <br />

      {/* Ex6 Props (both ways*/}
      <div>
        <h2>Ex6 Props (both ways)</h2>
        <MultiplyTwoNumbers calculate={setResult} />
        <PrintResult result={result}/>
      </div>
      <br />

      {/* Ex7 Props2*/}
      <div>
        <h2>Ex7 Props2</h2>
        <PlusMinusNum updateNum={setVal} />
        {val}
      </div>

      {/* Ex8 LoadImage*/}
      <div>
        <h2>Ex8 LoadImage</h2>
        {imgResult}
      </div>

      {/* Ex9 Styles*/}
      <div className="logo">
        <h2>Ex9 Styles</h2>
        {reactLogo}
      </div>

      {/* Ex10 StyledComponents*/}
      <div>
        <h2>Ex10 Styled-Components</h2>
        <Box $visible={true}>
          <p>holaaaaaa 
            <br /> 
          <span>Adioooooos</span>
          </p>
        </Box>
      </div>

      {/* Ex11 StyledComponents*/}
      <div>
        <h2>Ex11 Styled-Components</h2>
        <button onClick={ () => setBoxColor(!boxColor) }>Cambiar color</button>
        <BoxChange $color={boxColor}/>
      </div>
    </>
  )
}

export default App
