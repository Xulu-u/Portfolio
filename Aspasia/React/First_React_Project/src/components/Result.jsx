import PropTypes from 'prop-types';

const Result = ({ result }) => {
    return (
        <p>Resultado: {result}</p>
    )
}

Result.propTypes = {
    result: PropTypes.number,
};

export default Result