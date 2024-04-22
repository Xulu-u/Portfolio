import { useState } from "react"
import { P } from "./Hint.styles"
import PropTypes from 'prop-types';


const Hint = ({ hint }) => {
  const [visible, setVisible] = useState(false)
  return (
    <><button onClick={() => setVisible(!visible)}>Mostrar pista</button><P visible={visible}>{hint}</P></>
  )
}

Hint.propTypes = {
    hint: PropTypes.any,
};

export default Hint