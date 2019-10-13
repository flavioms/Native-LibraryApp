import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';
const {width, height} = Dimensions.get('window');

export const Book = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 8px;
  background-color: #f4f4f4;
  margin-bottom: ${height * 0.03};
`;

export const BookInfo = styled.View`
  width: 0;
  padding: 3%;
  justify-content: space-evenly;
  align-items: flex-start;
  flex: 1;
`;
export const BookTitle = styled.Text`
  font-family: 'Rubik';
  font-size: 16px;
  color: #000;
`;

export const BookCategories = styled.Text`
  font-family: 'Rubik';
  text-transform: uppercase;
  font-size: 14px;
`;
export const BookRating = styled(StarRating).attrs({
  emptyStarColor: '#f7ab21',
  fullStarColor: '#f7ab21',
  starSize: 20,
})``;
