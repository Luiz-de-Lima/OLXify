import styled from "styled-components";

type heightProps = {
  height: number;
};
export const Fake = styled.div<heightProps>`
  background-color: #ddd;
  height: "${(props) => props.height || 20}px";
`;
export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .box {
    background-color: #fff;

    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }

  .box--padding {
    padding: 10px;
  }
  .left-side {
    flex: 1;
    margin-right: 20px;
    .box {
      display: flex;
    }

    .box_adImage {
      width: 320px;
      height: 320px;
      margin-right: 20px;

      .slides {
        width: 50%;
        background-color: purple;
      }

      .each-slide img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;
      }
    }
    .box_adInfo {
      flex: 1;

      .box_adInfo--name {
        margin-bottom: 20px;
        h2 {
          margin: 0;
          margin-top: 20px;
        }
        small {
          color: #999;
        }
      }
      .box_adInfo--description {
        small {
          color: #999;
        }
      }
    }
  }
  .right-side {
    width: 250px;
    .price span {
      color: #1a9af5;
      display: block;
      font-size: 27px;
      font-weight: bold;
    }
    .contact-sellerLink {
      font-weight: 500;
      background-color: #1a9af5;
      color: #fff;
      height: 30px;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .createdBy small {
      display: block;
      color: #999;
      margin-top: 10px;
    }
  }
`;
export const OtherArea = styled.div`
  h2 {
    font-size: 20px;
  }

  .list {
    display: flex;
    .adItem {
      width: 25%;
    }
  }
`;
export const BreadCrumb = styled.div`
font-size:13px ;
margin-top:20px;
a{
  display:inline-block ;
  text-decoration:underline ;
  margin:0 5px;
}
`;
