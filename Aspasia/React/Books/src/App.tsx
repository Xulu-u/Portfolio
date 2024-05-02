
import {useState, useEffect} from 'react';
import {createBook, getBooks} from './app/services/bookApi';
import './App.css'
import { Book } from './common/types/Book';
import BooksTableRow from './components/BooksTableRow/BooksTableRow';

function App() {
  const [book, setBook] = useState<Book>({ title: '', price: '' });
  const [bookList, setBookList] = useState<Book[]>([])

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, title: event.target.value });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, price: event.target.value });
  };

  const handleAddBook = () => {
    createBook(book);
    renderBooks();
    setBook({id:'', title: '', price: ''});
  }

  const renderBooks = () => {getBooks().then(setBookList);}

  useEffect(() => {
    renderBooks();
  }, []);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {bookList.map(bookItem =>{
          return (
            <BooksTableRow key={bookItem.id} book={bookItem} renderBooks={renderBooks}/>
          )
        })}
        <tr>
          <td>
            {book.id}
          </td>
          <td>
            <input type="text" id="title" value={book.title} onChange={handleTitleChange} />
          </td>
          <td>
            <input type="number" id="price" value={book.price} onChange={handlePriceChange} />
          </td>
          <td>
            <button onClick={handleAddBook}>Add</button>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  );
}

export default App
