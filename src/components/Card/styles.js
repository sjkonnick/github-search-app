import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
  background-color: white;
`;

export const CardBody = styled.div`
  padding: 6px;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 12px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StarImage = styled.span`
  font-size: 20px;

  span {
    position: relative;
    top: 1px;
  }
`;
