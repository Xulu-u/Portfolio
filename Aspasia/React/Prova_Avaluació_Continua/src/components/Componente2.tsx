import React from 'react';

interface Componente2Props {
  value: number;
  characterName: string;
  characterImage: string;
}

const Componente2: React.FC<Componente2Props> = ({ value, characterName, characterImage }) => {
  return <div>
    <p>El valor introduït és: {value}</p>
    <p>El nom del personatge és: {characterName}</p>
    {characterImage && <img src={characterImage} alt={characterName} style={{ width: '200px', height: 'auto' }} />}
    </div>;
};

export default Componente2;

