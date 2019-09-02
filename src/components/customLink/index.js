import React from 'react';
import {Link, LinkText} from './style';

export default CustomLink = props => {
  const {name, color, onPress} = props;

  return (
    <Link onPress={onPress}>
      <LinkText color={color}>{name}</LinkText>
    </Link>
  );
};
