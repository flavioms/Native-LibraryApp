import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

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
  font-family: 'Rubik';
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#f7ab21',
})`
  margin: 30px 0;
`;
