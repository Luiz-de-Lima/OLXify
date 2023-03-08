import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: #ccc;
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
      gap: 20px;
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
  .category-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .category-item {
      width: 25%;
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;

      &:hover {
        color: #999;
      }
      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list-ads {
    display: flex;
    flex-wrap: wrap;

    .adItem {
      width: 25%;
    }
  }

  .see-allLink {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
`;
