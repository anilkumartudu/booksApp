import React from 'react';
import {Link, LinkText} from './style';

export default CustomLink = props => {
  const {name, color, onPress, fontSize} = props;

  return (
    <Link onPress={onPress}>
      <LinkText color={color} fontSize={fontSize}>
        {name}
      </LinkText>
    </Link>
  );
};
