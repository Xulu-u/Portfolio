import { useState, useEffect } from "react";
import ParchisImg from "../../assets/img/parchis.svg"
import { Board, Chip } from "./Parchís.Styles";

const Parchis = () => { 
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    

    const calculateSceneDimensions = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        if (w > h) {
            setWidth(h * 0.9);
            setHeight(h * 0.9);
        } else {
            setHeight(w * 0.9);
            setWidth(w * 0.9);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', calculateSceneDimensions);
        calculateSceneDimensions();
    }, [])

    const rollTheDice = () => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        return [dice1, dice2];
    };

    return(
        <>
            <button onClick={rollTheDice()}>Roll The Dice</button>
            <Board 
            width={width}
            height={height}
            imageUrl={ParchisImg}>
            </Board>
            <Chip color="red" x="0" y="0" />
            <Chip color="blue" x="0" y="0" />
        </>
    )
};

export default Parchis;