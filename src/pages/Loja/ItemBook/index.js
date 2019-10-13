import React from 'react';
import LazyImage from '~/components/LazyImage';
import ButtonOutline from '~/components/ButtonOutline';
import BookPNG from '~/assets/books.png';
import {Book, BookInfo, BookTitle, BookCategories, BookRating} from './styles';

export default function ItemBook({item, viewable, navigation}) {
  return (
    <Book
      onPress={() =>
        navigation.navigate('Details', {
          bookId: item.id,
        })
      }>
      <LazyImage
        shouldLoad={viewable.includes(item.id)}
        source={
          item.volumeInfo.imageLinks
            ? {uri: item.volumeInfo.imageLinks.thumbnail}
            : BookPNG
        }
        smallSource={
          item.volumeInfo.imageLinks
            ? {uri: item.volumeInfo.imageLinks.smallThumbnail}
            : BookPNG
        }
      />
      <BookInfo>
        <BookTitle>{item.volumeInfo.title}</BookTitle>
        <BookCategories>{item.volumeInfo.categories}</BookCategories>
        <BookRating
          disabled={true}
          maxStars={5}
          rating={item.volumeInfo.averageRating}
        />
        <ButtonOutline name="download" color="#f7ab21" size={18}>
          Download Prévia
        </ButtonOutline>
      </BookInfo>
    </Book>
  );
}
