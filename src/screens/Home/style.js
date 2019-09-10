import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View``;

export const SubContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const SubContainerText = styled.Text`
  color: ${props => (props.color ? props.color : theme.colors.white)};
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
`;
