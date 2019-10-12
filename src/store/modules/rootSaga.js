import {all} from 'redux-saga/effects';
import book from './book/sagas';

export default function* rootSaga() {
  return yield all([book]);
}
