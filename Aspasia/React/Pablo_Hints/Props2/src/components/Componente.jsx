import { useState } from "react";

const Componente = ({ updateVal }) => {
    const [val, setVal] = useState(0)
    return (
        <div>
            <button onClick={() => {
                setVal(val - 1);
                updateVal(val - 1);
            }}>-</button>
            <input type="text" value={val} onChange={e => {
                setVal(Number(e.target.value));
                updateVal(Number(e.target.value));
            }} />
            <button onClick={() => {
                setVal(val + 1);
                updateVal(val + 1);
            }}>+</button>
        </div>
    )
}

export default Componente