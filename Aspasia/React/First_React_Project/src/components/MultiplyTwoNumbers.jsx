import PropTypes from 'prop-types';
import {useState} from 'react';

const MultiplyTwoNumbers = ({calculate}) =>{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

  return (
    <div>
        <input type="text" onChange={e => setNum1(e.target.value)} />
        <input type="text" onChange={e => setNum2(e.target.value)} />
        <button onClick={() => calculate(num1 * num2)}>Calcular</button>
    </div>
  )
    
};

MultiplyTwoNumbers.propTypes = {
    calculate: PropTypes.number,
};

export default MultiplyTwoNumbers;