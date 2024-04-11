import PropTypes from 'prop-types';
import { Back, Back2 } from "../../app/styles"

const Popup = ({visible, sendVisible}) =>{
   return(
     <div>
        <Back $visible={visible}>
        <button onClick={() => sendVisible(false)}> Close</button>
        </Back>
        <Back2 $visible={visible}></Back2>
    </div>
   )
}

Popup.propTypes = {
    visible: PropTypes.bool,
    sendVisible: PropTypes.bool,
};

export default Popup;