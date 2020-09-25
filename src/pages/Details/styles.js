import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Container = styled.div`
  margin: 15px 30px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
  background-color: white;

  @media screen and (max-width: 650px) {
    margin: 15px 10px;
  }
`;

export const MarkdownContainer = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 20px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
  background-color: white;

  code {
    white-space: pre-wrap !important;
    word-wrap: break-word;
  }

  img {
    width: 100%;
  }
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
