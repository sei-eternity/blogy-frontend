import apiUrl from '../apiConfig';
import axios from 'axios';

export const getAllArticles = function() {
  return axios.get(`${apiUrl}/articles`);
}

export const deleteArticleByID = function(id) {
  return axios.delete(`${apiUrl}/articles/${id}`);
}