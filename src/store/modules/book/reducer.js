import produce from 'immer';

const INITIAL_STATE = {books: [], page: 0, total: 0, loading: false};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@book/GET_BOOKS_SUCCESS': {
        draft.books = action.payload.data;
        draft.page += 10;
        draft.total = Math.floor(action.payload.data.totalItems / 10);
        break;
      }
      default:
    }
  });
}
