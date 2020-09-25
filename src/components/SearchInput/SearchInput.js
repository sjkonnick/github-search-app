import React from 'react';
import { Container, Input, Button } from './styles';

const SearchInput = ({ setSearch, searchRepos, search }) => {
  const changeValue = (value) => {
    setSearch(value);
  };

  const submitValue = () => {
    searchRepos(search);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Repository Name"
        value={search}
        onChange={(event) => changeValue(event.target.value)}
      />
      <Button onClick={submitValue}>Search</Button>
    </Container>
  );
};

export default SearchInput;
