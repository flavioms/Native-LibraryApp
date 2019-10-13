import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
const {width} = Dimensions.get('window');

export const ButtonDownload = styled(TouchableOpacity)`
  width: 100%;
  max-width: ${width * 0.55};
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.color};
  border-radius: 30px;
`;
export const ButtonDownloadText = styled.Text`
  text-transform: uppercase;
  color: ${props => props.color};
  font-family: 'Rubik';
  font-size: 14px;
  font-weight: 600;
  padding: 6px;
`;
