import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {ButtonDownload, ButtonDownloadText} from './styles';

export default function ButtonOutline({children, name, size, color, ...rest}) {
  return (
    <ButtonDownload {...rest} color={color}>
      <Icon name={name} size={size} color={color} />
      <ButtonDownloadText color={color}>{children}</ButtonDownloadText>
    </ButtonDownload>
  );
}
