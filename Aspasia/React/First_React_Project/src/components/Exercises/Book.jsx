import PropTypes from 'prop-types';

const Book = ({book}) =>(
   <p>{book}</p>
) ;

Book.defaultProps = {
  book: 'No book'
}

Book.propTypes = {
    book: PropTypes.string,
};

export default Book;