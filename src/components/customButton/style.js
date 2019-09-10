import styled from 'styled-components/native';
import theme from '../../theme';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  border-width: 1px;
  border-radius: 30px;
  border-color: ${props =>
    props.borderColor ? props.borderColor : theme.colors.transparent};
  background-color: ${props =>
    props.bgColor ? props.bgColor : theme.colors.transparent};
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: ${props => (props.color ? props.color : theme.colors.black)};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.normal};
`;
