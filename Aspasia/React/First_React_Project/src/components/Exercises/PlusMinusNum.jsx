import PropTypes from 'prop-types';
import {useState} from 'react';

const PlusMinusNum = ({updateNum}) =>{
    const [num, setNum] = useState(0);

  return (
    <div>
        <button onClick={() => { 
          setNum(num - 1);
          updateNum(num - 1);
        }}>-</button>
        <input type="text" value={num} onChange={e => {
          setNum(Number(e.target.value));
          updateNum(Number(e.target.value));
        }}/>
        <button onClick={() => { 
          setNum(num + 1);
          updateNum(num + 1);
        }}>+</button>
    </div>
  )
};

PlusMinusNum.propTypes = {
    updateNum: PropTypes.number,
};

export default PlusMinusNum;