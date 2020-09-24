import React, { Component } from 'react';
import { Container, Input, Button } from './styles';

class SearchInput extends Component {
  changeValue = (value) => {
    this.props.setSearch(value);
  };

  submitValue = () => {
    this.props.searchRepos(this.props.search);
  };

  render() {
    return (
      <Container>
        <Input
          type="text"
          placeholder="Repository Name"
          value={this.props.search}
          onChange={(event) => this.changeValue(event.target.value)}
        />
        <Button onClick={this.submitValue}>Search</Button>
      </Container>
    );
  }
}

export default SearchInput;
