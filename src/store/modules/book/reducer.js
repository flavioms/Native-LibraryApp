import produce from 'immer';

const INITIAL_STATE = {books: []};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@book/GET_BOOKS_SUCCESS': {
        draft.books = action.payload.data;
        break;
      }
      default:
    }
  });
}
