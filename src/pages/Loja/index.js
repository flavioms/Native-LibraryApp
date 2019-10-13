/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import ItemBook from './ItemBook';
import {AllBooks} from '~/controller/books/index';
import {Container, Title, Loading} from './styles';

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
    const {totalItems, items} = await AllBooks(pageNumber);
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
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 20}}
        ListHeaderComponent={<Title>Popular</Title>}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
          <ItemBook item={item} viewable={viewable} navigation={navigation} />
        )}
      />
    </Container>
  );
}
