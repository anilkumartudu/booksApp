import styled from 'styled-components/native';
import theme from '../../theme';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;
// height: ${props => (props.height ? props.height : null)};
// width: ${props => (props.width ? props.width : null)};

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
  background-color: rgba(255, 255, 255, 0.4);
  height: 130px;
  width: 130px;
`;
