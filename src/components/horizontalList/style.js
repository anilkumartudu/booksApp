import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.Text`
  flex: 1;
  justify-content: center;
  padding: 20px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.large};
`;

export const ItemSeparator = styled.View`
  margin-left: 5%;
  height: 1;
  width: 90%;
  background-color: ${theme.colors.white};
`;
