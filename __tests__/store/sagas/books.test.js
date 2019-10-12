import {runSaga} from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import {getBooksSuccess} from '~/store/modules/book/actions';
import {getBooks} from '~/store/modules/book/sagas';

const apiMock = new MockAdapter(api);

describe('Books saga', () => {
  it('Should be able to fetch books', async () => {
    const dispatch = jest.fn();
    apiMock.onGet('books').reply(200, []);
    await runSaga({dispatch}, getBooks).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getBooksSuccess([]));
  });
  it('Should fail when api returns error', async () => {
    const dispatch = jest.fn();
    apiMock.onGet('books').reply(500);
    await runSaga({dispatch}, getBooks).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getBooksSuccess([]));
  });
});
