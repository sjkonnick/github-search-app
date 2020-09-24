import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  margin: 15px auto;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
  background-color: white;
`;

export const MarkdownContainer = styled.div`
  margin: 15px 30px;
  padding: 20px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
  background-color: white;
`;

export const Warning = styled.div`
  color: white;
  font-size: 28px;
  margin: 20px;
  text-align: center;

  @media screen and (max-width: 650px) {
    bottom: 30%;
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  left: calc(50vw - 100px);
  top: calc(50vh - 100px);
`;
