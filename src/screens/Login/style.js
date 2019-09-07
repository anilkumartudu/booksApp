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
  justify-content: space-between;
  margin: 10px 0px;
`;

export const ColumnContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;
