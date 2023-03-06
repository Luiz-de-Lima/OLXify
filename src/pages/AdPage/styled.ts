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

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px #999;
  }

  .box-padding {
      padding: 10px;
    }
  .left-side {
    flex: 1;
    margin-right: 20px;

    .box_adImage {
    }
    .box_adInfo {
      padding: 10px;
      .box_adInfo--name {
        margin-bottom: 20px;
      }
      .box_adInfo--description {
      }
    }
  }
  .right-side {
    width: 250px;
  }
`;
