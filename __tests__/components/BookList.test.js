import React from 'react';
import {render} from '@testing-library/react-native';
import BookList from '~/components/BookList';

describe('BookList Test', () => {
  it('There must be a title on the component', () => {
    const {getByText} = render(<BookList />);
    expect(getByText('Popular')).toBeTruthy();
  });

  it('There must be a list on the component', () => {
    const {getByTestId} = render(<BookList />);
    expect(getByTestId('book-list')).toBeTruthy();
  });
});
