import React, { Component } from 'react';
import { Container, Select } from './styles';

class SortDropDown extends Component {
  changeValue = (value) => {
    this.props.setSort(value);
  };

  render() {
    return (
      <Container>
        <Select value={this.props.sort} onChange={(event) => this.changeValue(event.target.value)}>
          <option key="best-match" value="Best Match">
            Best Match
          </option>
          <option key="stars" value="Stars">
            Stars
          </option>
        </Select>
      </Container>
    );
  }
}

export default SortDropDown;
