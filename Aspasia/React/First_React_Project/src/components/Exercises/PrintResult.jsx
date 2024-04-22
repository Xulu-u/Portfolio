import PropTypes from 'prop-types';

const PrintResult = ({ result }) => {
    return (
        <p>Resultado: {result}</p>
    )
}

PrintResult.propTypes = {
    result: PropTypes.number,
};

export default PrintResult