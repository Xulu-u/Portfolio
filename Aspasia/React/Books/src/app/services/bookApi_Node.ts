import axios from 'axios';
import { Book } from '../../common/types/Book';

const instance = axios.create({baseURL: 'http://localhost:5000'});

// CREATE
export const createBook = async(obj:Book):Promise<string> => {
    const response = await instance.post('/books', obj);
    return response.data.id;
}

// UPDATE
export const updateBook = async (id:string, obj:Book) => {
    await instance.put(`/books/${id}`, obj);
}

// READ
export const getBooks= async (): Promise<Book[]>  => {
    const response = await instance.get('/books');
    return response.data;
}

export const getBookById = async (id:string) => {
    const response = await instance.get(`/books/${id}`);
    return response.data;
}

// DELETE
export const deleteBook = async (id:string) => {
    await instance.delete(`/books/${id}`);
}