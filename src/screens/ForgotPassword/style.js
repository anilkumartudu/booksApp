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
  justify-content: center;
  margin: 10px 0px;
`;

export const ColumnContainer = styled.View`
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const CustomText = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${props =>
    props.fontWeight ? theme.fontWeight.bold : theme.fontWeight.normal};
  font-size: ${props =>
    props.fontSize ? theme.fontSize.huge : theme.fontSize.large};
`;
