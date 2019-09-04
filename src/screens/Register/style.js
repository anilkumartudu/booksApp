import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  padding: 20px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

export const RowContainer = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const ImageContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  height: 130px;
  width: 130px;
  border-radius: 70px;
  border-width: 4px;
  border-color: ${theme.colors.white};
`;
