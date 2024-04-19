import axios from 'axios';
import { i } from './api';

export const getPeople = async (id = 1) => {
    const r = await i.get('/people?page=' + id);
    return r.data;
}

export const getCharacterById = async (id) => {
    const r = await i.get('/people/' + id);
    console.log(r)
    return r.data;
}


export const getFilmsFromUrls = async (urls) => {
    const r = await Promise.all(urls.map(async (url) => {
        const r = await axios.get(url) // 
        return r.data;
    }));
    return r;
}

//https://swapi.dev/api/https://swapi.py4e.com/api/films/2/