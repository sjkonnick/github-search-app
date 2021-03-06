import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  margin-bottom: 10px;

  @media screen and (max-width: 650px) {
    width: 100%;
    position: relative;
    right: 0;
    left: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
  -webkit-appearance: none;
  background-color: white;

  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`;
