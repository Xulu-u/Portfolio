import axios from 'axios';

const instance = axios.create({ baseURL: 'https://swapi.dev/api' });

export const getPeople = async () => {
    const r = await instance.get('/people');
    return r.data.results;
}

export const getCharacterById = async (id) => {
    const r = await instance.get('/people/' + id);
    return r.data;
}

export const getFilmsFromUrls = async (urls) => {
    const r = await Promise.all(urls.map(async (url) => {
        const r = await axios.get(url)
        return r.data;
    }));
    return r;
}

export const getPlanetFromId = (id) => instance.get(`/planets/${id}/`);

export const getFilmFromId = (id) => instance.get(`/films/${id}/`);

export const getSpeciesFromId = (id) => instance.get(`/species/${id}/`);