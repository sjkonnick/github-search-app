import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  left: calc(50vw - 100px);
  top: calc(50vh - 100px);
`;

export const Warning = styled.div`
  position: fixed;
  color: white;
  font-size: 28px;
  bottom: 40%;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 650px) {
    bottom: 30%;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const LinkButton = styled.button`
  border-radius: 5px;
  padding 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
