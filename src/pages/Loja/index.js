/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LazyImage from '~/components/LazyImage';
import BookPNG from '~/assets/books.png';
import {
  Container,
  Title,
  Loading,
  Book,
  BookInfo,
  BookTitle,
  BookCategories,
  BookRating,
  ButtonDownload,
  ButtonDownloadText,
} from './styles';

export default function Loja({navigation}) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);
  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({item}) => item.id));
  }, []);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) {
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=historia&langRestrict=pt&orderBy=relevance&projection=full&startIndex=${page}&key=AIzaSyBZ-UKEfTEe3pjAIPjQ4-7j01VmyM7xXKA`,
    );
    const {totalItems, items} = await response.json();

    setTotal(Math.floor(totalItems / 10));
    setBooks(shouldRefresh ? items : [...books, ...items]);
    setPage(pageNumber + 10);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  return (
    <Container>
      <FlatList
        data={books}
        keyExtractor={book => book.id}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.2}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 30}}
        ListHeaderComponent={<Title>Popular</Title>}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
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
              <ButtonDownload>
                <Icon name="download" size={18} color="#f7ab21" />
                <ButtonDownloadText>Download Prévia</ButtonDownloadText>
              </ButtonDownload>
            </BookInfo>
          </Book>
        )}
      />
    </Container>
  );
}
