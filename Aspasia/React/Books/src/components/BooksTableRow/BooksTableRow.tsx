import {useState} from 'react';
import {Book} from '../../common/types/Book';
import { deleteBook, updateBook } from '../../app/services/bookApi';

const BooksTableRow = ({ book, renderBooks }: { book: Book, renderBooks: () => void }) =>{
    const [title, setTitle] = useState<string>(book.title);
    const [price, setPrice] = useState<string>(book.price);

    return (
        <tr>
            <td>
                {book.id}
            </td>
            <td>
                <input type="text" id="title" defaultValue={title} onChange={e => setTitle(e.target.value)} />
            </td>
            <td>
                <input type="number" id="price" defaultValue={price} onChange={e => setPrice(e.target.value)} />
            </td>
            <td>
                <button onClick={() => {
                    updateBook(book.id || '', {title, price});
                    renderBooks();
                }}>Update</button>
            </td>
            <td>
                <button onClick={() => {
                    deleteBook(book.id||'');
                    renderBooks();
                }}>Delete</button>   
            </td>
        </tr>
    );
}

export default BooksTableRow;