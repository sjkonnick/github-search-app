import React, { Component } from 'react';
import { Container } from './styles';
import Card from '../Card';

class CardList extends Component {
  render() {
    return (
      <Container>
        {this.props.items.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            description={item.description}
            image={item.owner.avatar_url}
            stars={item.stargazers_count}
            language={item.language}
            owner={item.owner.login}
          />
        ))}
      </Container>
    );
  }
}

export default CardList;
