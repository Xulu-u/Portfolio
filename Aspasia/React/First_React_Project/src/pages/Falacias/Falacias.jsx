import { useEffect, useState } from 'react'
import falacias from '../../assets/data/falacias.json'
import { getRandom, shuffleArray } from '../../app/utils';
import Hint from '../../components/Falacias/Hint';
import { P } from './Falacias.Syled';

const Falacias = () => {
    const [sample, setSample] = useState();
    const [answer, setAnswer] = useState();
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        chooseFalacy()

    }, [])


    const chooseFalacy = () => {
        const falacy = falacias[Math.floor(Math.random() * falacias.length)]
        setAnswer(falacy)
        const s = falacy.samples[Math.floor(Math.random() * falacy.samples.length)];
        const falacysAux = falacias.filter(f => f.type !== s.type);
        const wrongFalacys = getRandom(falacysAux, 2);


        console.log(wrongFalacys, [...wrongFalacys, falacy])
        const wrongFalacysAux = shuffleArray([...wrongFalacys, falacy]);
        setSample(s)
        setOptions(wrongFalacysAux)
    }

    const checkFalacy = (falacy) => {
        if (answer.type === falacy.type) {
        alert('Correcto')
        chooseFalacy()
        }
    }
    return (
        <>
        <h1>{sample}</h1>

        {
            options.map(o => <P right={o.type === answer.type} key={o.type}><button onClick={() => checkFalacy(o)}> X </button> {o.type} <Hint hint={o.def} /></P>)
        }
        </>
    )
}

export default Falacias