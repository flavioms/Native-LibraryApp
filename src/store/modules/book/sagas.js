import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {getBookSuccess, getBookFailure} from './actions';

export function* getBooks(page) {
  try {
    const response = yield api.get('volumes', {
      params: {
        startIndex: page,
        maxResults: 10,
        printType: 'books',
        sorting: 'relevance',
        langRestrict: 'pt',
      },
    });
    console.tron.error(response.data);
    yield put(getBookSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha na busca', 'Erro ao buscar os livros!');
    yield put(getBookFailure());
  }
}
export default all([takeLatest('@book/GET_BOOK_REQUEST', getBooks)]);
