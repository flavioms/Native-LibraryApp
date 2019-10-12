import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: 'AIzaSyBZ-UKEfTEe3pjAIPjQ4-7j01VmyM7xXKA',
    maxResults: 10,
    printType: 'books',
    sorting: 'relevance',
    langRestrict: 'pt',
  },
});

export default api;
