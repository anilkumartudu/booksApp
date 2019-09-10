import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.colors.murkyBlack};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const ColumnContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

export const CustomText = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.huge};
`;
