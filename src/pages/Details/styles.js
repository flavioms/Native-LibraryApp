import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';
const {width, height} = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 ${width * 0.06}px;
`;

export const Title = styled.Text`
  margin: ${height * 0.04}px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #f7ab21;
`;

export const BookInfo = styled.View`
  flex-direction: row;
  margin-bottom: ${height * 0.05};
`;

export const BookImage = styled.Image`
  width: ${width * 0.35};
  height: ${height * 0.4};
  border-radius: 8px;
`;
export const BookDetails = styled.View`
  flex: 1;
  width: 0;
  padding: 0 3%;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const BookText = styled.View`
  margin-bottom: ${props => (props.last ? 10 : 3)}%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BookTextLabel = styled.Text`
  font-weight: 600;
  text-transform: capitalize;
`;

export const BookTextValue = styled.Text`
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 1%;
`;

export const BookRating = styled(StarRating).attrs({
  emptyStarColor: '#f7ab21',
  fullStarColor: '#f7ab21',
  starSize: 20,
})`
  flex-grow: 1;
`;
export const BookDescription = styled.Text`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: ${height * 0.05};
`;

export const ButtonDownload = styled(TouchableOpacity)`
  width: 100%;
  max-width: ${width * 0.55};
  margin: 0 auto;
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

export const BookFooter = styled.View`
  margin: ${height * 0.05}px 0;
`;

export const FooterTitle = styled.Text`
  font-size: 14px;
  margin-bottom: ${height * 0.02};
`;

export const Price = styled.View`
  height: ${height * 0.18};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: ${height * 0.1};
`;
export const PriceGroup = styled.View`
  margin-left: 12px;
`;

export const PriceCurrency = styled.Text`
  font-size: 20px;
`;
export const PriceValue = styled.Text`
  font-size: 35px;
  margin-left: 6px;
`;
export const PriceCondition = styled.Text`
  font-size: 12px;
`;
export const ButtonBuy = styled(TouchableOpacity)`
  width: 100%;
  position: absolute;
  bottom: -12%;
  max-width: ${width * 0.55};
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f7ab21;
  border: 2px solid #f7ab21;
  border-radius: 30px;
`;
export const ButtonBuyText = styled.Text`
  text-transform: uppercase;
  color: #000;
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
