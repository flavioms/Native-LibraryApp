/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {
  Container,
  Title,
  BookInfo,
  OriginalTitle,
  Genre,
  Author,
  BookDescription,
} from './styles';
import {BookTitle} from '../Loja/styles';

export default function Details({navigation}) {
  const bookId = navigation.getParam('bookId') || '';
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  async function loadBook(id) {
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?projection=lite&key=AIzaSyBZ-UKEfTEe3pjAIPjQ4-7j01VmyM7xXKA`,
    );
    const result = await response.json();
    setBook(result);
    setLoading(false);
  }

  useEffect(() => {
    loadBook(bookId);
  }, [bookId]);

  if (!book) {
    return <Text>CArregando...</Text>;
  }

  return (
    <Container>
      <BookInfo>
        {/* <Image source={{uri: book.volumeInfo.imageLinks.medium}} /> */}
        {/* <Image source={{uri: book.volumeInfo.imageLinks.medium}} /> */}
        <BookTitle>Titulo: {book.volumeInfo.title}</BookTitle>
        <Genre>Gênero: {book.volumeInfo.categories}</Genre>
        <Author>Autores: {book.volumeInfo.authors}</Author>
      </BookInfo>
      {/* <BookDescription>
        Descrição: {book.volumeInfo.description}
      </BookDescription> */}
    </Container>
  );
}
