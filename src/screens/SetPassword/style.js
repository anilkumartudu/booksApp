import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.colors.murkyBlack};
`;

export const ColumnContainer = styled.View`
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const CustomText = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSize.large};
`;
