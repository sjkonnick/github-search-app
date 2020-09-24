import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Menu = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 28px;
  text-align: center;
`;
