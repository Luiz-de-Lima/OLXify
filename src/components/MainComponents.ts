import styled from "styled-components";

export const Template = styled.div``;
export const PageContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`;
export const PageTitle = styled.h1`
  font-size: 27px;

  @media (max-width: 600px) {
    font-size: 22px;
    padding: 10px 0;
    text-align: center;
  }
`;
export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px;
  background-color: #ffcaca;
  color: #000;
  border: 2px solid #ff0000;
  padding: 5px;
`;
