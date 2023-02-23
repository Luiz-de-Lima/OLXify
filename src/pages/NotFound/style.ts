import styled from "styled-components";
export const Container = styled.div`
display:flex ;
flex-direction:column ;
  a {
    text-decoration: none;
    color: #000055;
    &:hover {
      color: #0060f0;
    }
  }
  .notfound {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
  }
`;
export const Title = styled.h2`
  color: #ff0000;
`;
export const BackLink = styled.a``;
