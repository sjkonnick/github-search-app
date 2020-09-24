import React from 'react';
import { Container, CardLink, Image, Title, Description, CardBody } from './styles';

const Card = (props) => (
  <Container>
    <CardLink to={{ pathname: '/details', query: props }}>
      <Image src={props.image} alt={props.title} />
      <CardBody>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Description>
          <span role="img" aria-label="star">
            &#11088;
          </span>
          : {props.stars}
        </Description>
        <Description>Language: {props.language}</Description>
        <Description>Owner: {props.owner}</Description>
      </CardBody>
    </CardLink>
  </Container>
);

export default Card;
