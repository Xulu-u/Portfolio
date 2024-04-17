import {i} from './api';

export const getPeople = async () => {
  const res = await i.get(`/people`);
  return res.data.results;
}