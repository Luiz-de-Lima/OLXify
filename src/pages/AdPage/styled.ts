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
    box-shadow: 0 0 4px #999;
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
    background-color: #fff;
  }
`;
