import { useState } from "react";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";

const App = () => {
  const [result, setResult] = useState(0);
  return (
    <div>
      <Componente1 calculate={setResult} />
      <Componente2 result={result} />
    </div>
  )
}

export default App