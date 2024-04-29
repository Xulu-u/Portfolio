import axios from 'axios';
import {i} from '../../../../Pablo_Hints/REST/src/app/services/api';

const instance = axios.create({ baseURL: 'https://swapi.dev/api' });

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

export const getPlanetFromId = (id) => instance.get(`/planets/${id}/`);

export const getFilmFromId = (id) => instance.get(`/films/${id}/`);

export const getSpeciesFromId = (id) => instance.get(`/species/${id}/`);