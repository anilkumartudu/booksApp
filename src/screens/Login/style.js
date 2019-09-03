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
  justify-content: space-between;
`;

export const ColumnContainer = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;
