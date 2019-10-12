export function getBooksRequest() {
  return {
    type: '@book/GET_BOOKS_REQUEST',
  };
}

export function getBooksSuccess(data) {
  return {
    type: '@book/GET_BOOKS_SUCCESS',
    payload: {data},
  };
}

export function getBooksFailure() {
  return {
    type: '@book/GET_BOOKS_FAILURE',
  };
}
