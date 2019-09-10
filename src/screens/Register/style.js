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
  align-items: flex-end;
  margin: 10px 0px;
`;

export const ImageContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  border-width: 4px;
  border-color: ${theme.colors.white};
  background-color: ${theme.colors.murkyWhite};
  height: 130px;
  width: 130px;
`;
