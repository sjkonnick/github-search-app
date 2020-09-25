import React from 'react';
import { Container, CardLink, Image, Title, Description, CardBody, StarImage, Subtitle } from './styles';

const Card = (props) => (
  <Container>
    <CardLink to={{ pathname: '/details', query: props }}>
      <Image src={props.image} alt={props.title} />
      <CardBody>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Description>
          <StarImage>
            <span role="img" aria-label="star">
              &#11088;
            </span>{' '}
            {props.stars}
          </StarImage>
        </Description>
        <Subtitle>Language: {props.language}</Subtitle>
        <Subtitle>Owner: {props.owner}</Subtitle>
      </CardBody>
    </CardLink>
  </Container>
);

export default Card;
