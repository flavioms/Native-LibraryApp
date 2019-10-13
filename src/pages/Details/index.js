/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Title,
  Loading,
  BookImage,
  BookInfo,
  BookDetails,
  BookText,
  BookTextLabel,
  BookTextValue,
  BookRating,
  BookDescription,
  ButtonDownload,
  ButtonDownloadText,
  BookFooter,
  FooterTitle,
  Price,
  PriceCurrency,
  PriceValue,
  PriceCondition,
  PriceGroup,
  ButtonBuy,
  ButtonBuyText,
} from './styles';

export default function Details({navigation}) {
  const bookId = navigation.getParam('bookId') || '';
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  async function loadBook(id) {
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?projection=full&key=AIzaSyBZ-UKEfTEe3pjAIPjQ4-7j01VmyM7xXKA`,
    );
    const result = await response.json();
    setBook(result);
    setLoading(false);
  }

  useEffect(() => {
    loadBook(bookId);
  }, [bookId]);

  if (!book || loading) {
    return <Loading />;
  }

  return (
    <Container>
      {book.id && (
        <>
          <Title>{book.volumeInfo.title}</Title>
          <BookInfo>
            <BookImage
              resizeMode="stretch"
              source={{uri: book.volumeInfo.imageLinks.medium}}
            />
            <BookDetails>
              <BookText>
                <BookTextLabel>Titulo</BookTextLabel>
                <BookTextValue>{book.volumeInfo.title}</BookTextValue>
              </BookText>
              <BookText>
                <BookTextLabel>Gênero</BookTextLabel>
                <BookTextValue>{book.volumeInfo.categories}</BookTextValue>
              </BookText>
              <BookText>
                <BookTextLabel>Autores</BookTextLabel>
                <BookTextValue>{book.volumeInfo.authors}</BookTextValue>
              </BookText>
              <BookText last={true}>
                <BookTextLabel>Editora</BookTextLabel>
                <BookTextValue>{book.volumeInfo.publisher}</BookTextValue>
              </BookText>
              <BookRating
                disabled={true}
                maxStars={5}
                rating={book.volumeInfo.averageRating}
              />
            </BookDetails>
          </BookInfo>
          <BookDescription>
            {`Descrição \n\n${book.volumeInfo.description}`}
          </BookDescription>

          <BookDescription>
            {
              'Prévia\n\nTenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.'
            }
          </BookDescription>

          <ButtonDownload>
            <Icon name="download" size={18} color="#f7ab21" />
            <ButtonDownloadText>Download Prévia</ButtonDownloadText>
          </ButtonDownload>

          <BookFooter>
            <FooterTitle>E-book Kindle</FooterTitle>
            <Price>
              <PriceCurrency>R$</PriceCurrency>
              <PriceGroup>
                {book.saleInfo.saleability === 'FOR_SALE' ? (
                  <PriceValue>{book.saleInfo.listPrice.amount}</PriceValue>
                ) : (
                  <PriceValue>0.00</PriceValue>
                )}
                <PriceCondition>COMPRA NO DÉBITO</PriceCondition>
              </PriceGroup>
              <ButtonBuy>
                <Icon name="shoppingcart" size={20} color="#000" />
                <ButtonBuyText>Download Prévia</ButtonBuyText>
              </ButtonBuy>
            </Price>
          </BookFooter>

          <FloatingAction
            color={'#000'}
            showBackground={false}
            distanceToEdge={{vertical: 10, horizontal: 0}}
            floatingIcon={<Icon name="like2" size={25} color="#f7ab21" />}
          />
        </>
      )}
    </Container>
  );
}
