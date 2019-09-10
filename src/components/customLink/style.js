import styled from 'styled-components/native';
import theme from '../../theme';

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  color: ${props => (props.color ? props.color : theme.colors.black)};
  font-size: ${props =>
    props.fontSize ? props.fontSize : theme.fontSize.normal};
`;
