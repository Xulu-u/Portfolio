import { useState } from "react";
const Componente1 = ({ calculate }) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    return (
        <div>
            <input type="text" onChange={e => setN1(e.target.value)} />
            <input type="text" onChange={e => setN2(e.target.value)} />
            <button onClick={() => calculate(n1 * n2)}>Calcular</button>
        </div>
    )
}

export default Componente1