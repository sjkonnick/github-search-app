import React from 'react';
import { Container, Input } from './styles';
import { languages } from '../../utils/languages';

const SearchableDropDown = ({ setLanguage, language }) => {
  const changeValue = (value) => {
    setLanguage(value);
  };

  return (
    <Container>
      <Input
        type="search"
        value={language}
        placeholder="Language"
        list="languages"
        onChange={(event) => changeValue(event.target.value)}
      />
      <datalist id="languages">
        {languages.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </Container>
  );
};

export default SearchableDropDown;
