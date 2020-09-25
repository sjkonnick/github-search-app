import React from 'react';
import { Container, Select } from './styles';

const SortDropDown = ({ setSort, sort }) => {
  const changeValue = (value) => {
    setSort(value);
  };

  return (
    <Container>
      <Select value={sort} onChange={(event) => changeValue(event.target.value)}>
        <option key="best-match" value="Best Match">
          Best Match
        </option>
        <option key="stars" value="Stars">
          Stars
        </option>
      </Select>
    </Container>
  );
};

export default SortDropDown;
