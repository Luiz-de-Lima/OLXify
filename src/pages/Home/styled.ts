import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: solid 1px #ccc;
  padding: 20px 0;

  .search-box {
    background-color: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-sizing: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        color: #000;
        margin-right: 1.2rem;
      }
      input {
        flex: 1;
        padding: 0 10px;
      }
      select {
        width: 100px;
      }
      button {
        background-color: #49aeef;
        font-size: 15px;
        border: 0;
        border-radius: 5px;
        height: 40px;
        padding: 0 20px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export const PageArea = styled.div``;
