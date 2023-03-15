import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .left-side {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10px 0;
    }
    input,
    select {
      width: 100%;
      height: 40px;
      border: solid 2px solid #9bb83c;
      border-radius: 5px;
      color: #000;
      outline: none;
      padding: 10px;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .category-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
      }
    }
    .category-item:hover,
    .category-item:active {
      background-color: #9bb83c;
      color: #fff;
    }
  }
  .right-side {
    flex: 1;

    h2 {
      margin-top: 0;
    }
    .list {
      display: flex;
      flex-wrap: wrap;

      .adItem{
        width:33% ;
      }
    }
    .list-warning{
      padding:30px ;
      text-align:center ;
    }
  }
`;
