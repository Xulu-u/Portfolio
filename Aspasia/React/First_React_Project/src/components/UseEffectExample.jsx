import { useState, useEffect } from "react";

const UseEffectExample = () =>{
    const [data, setData] = useState(0);
    const [dataIndex, setdataIndex] = useState(0);

    const d = data[dataIndex];

    useEffect(() => {
        console.log('Montaje')

        fetch('https://rickandmortyapi.com/documentation')
        .then((res) => res.json())
        .then((data) => {
                setData(data);
            })

        return ()=>{
            console.log('Desmontaje')
        }
    }, [])
    

    return(
        <div>
            {
                //TODO
                data.map((obj, i) => <p key={obj.id} onClick={setdataIndex(i)}>obj.name</p>)
            }
        </div>
    )
}

export default UseEffectExample
