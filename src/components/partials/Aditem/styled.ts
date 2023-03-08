import styled from "styled-components";

export const Item = styled.div`
  a {
    display: block;
    border: 1px solid #fff;
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all ease 0.2s;

    &:hover {
      border: 1px solid #ccc;
      background-color: #eee;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }

    .itemName {
      font-weight: bold;
    }
  }
`;
