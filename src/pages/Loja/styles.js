import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';

const {width, height} = Dimensions.get('window');
export const Container = styled.View`
  flex: 1;
  padding: 0 ${width * 0.06}px;
`;
export const Title = styled.Text`
  margin: ${height * 0.02}px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #f7ab21;
`;
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
  font-family: Rubik;
  font-size: 16px;
  color: #000;
`;

export const BookCategories = styled.Text`
  font-family: Rubik;
  text-transform: uppercase;
  font-size: 14px;
`;
export const BookRating = styled(StarRating).attrs({
  emptyStarColor: '#f7ab21',
  fullStarColor: '#f7ab21',
  starSize: 20,
})``;
export const ButtonDownload = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #f7ab21;
  border-radius: 30px;
`;
export const ButtonDownloadText = styled.Text`
  text-transform: uppercase;
  color: #f7ab21;
  font-size: 14px;
  font-weight: 600;
  padding: 6px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#f7ab21',
})`
  margin: 30px 0;
`;
