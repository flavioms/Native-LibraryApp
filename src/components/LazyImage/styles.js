import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Cover = styled.View`
  width: ${width * 0.3};
  height: ${height * 0.25};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Small = styled.ImageBackground.attrs({
  borderBottomLeftRadius: 8,
  borderTopLeftRadius: 8,
})`
  width: 100%;
  height: 100%;
`;

export const Original = styled.Image.attrs({
  borderBottomLeftRadius: 8,
  borderTopLeftRadius: 8,
})`
  width: 100%;
  height: 100%;
`;
