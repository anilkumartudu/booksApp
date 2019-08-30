import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  padding-left: 20px;
  border-width: 1px;
  border-radius: 30px;
  border-color: ${props =>
    props.borderColor ? props.borderColor : theme.colors.black};
  background-color: ${props =>
    props.bgColor ? props.bgColor : theme.colors.transparent};
`;

export const TextInput = styled.TextInput`
  color: ${props => (props.color ? props.color : theme.colors.black)};
`;
