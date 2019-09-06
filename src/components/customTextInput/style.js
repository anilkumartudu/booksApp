import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  border-width: 1px;
  border-radius: 30px;
  border-color: ${props =>
    props.borderColor ? props.borderColor : theme.colors.transparent};
  padding-left: 20px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : theme.colors.transparent};
`;

export const TextInput = styled.TextInput`
  margin-left: 5px;
  color: ${props => (props.color ? props.color : theme.colors.black)};
  width: 270px;
`;
