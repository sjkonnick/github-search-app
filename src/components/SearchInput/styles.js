import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
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

export const Input = styled.input`
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: solid 2px #005ad8;
  border-radius: 5px;
  background-color: #005ad8;
  color: white;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
`;
