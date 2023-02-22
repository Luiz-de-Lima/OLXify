import styled from "styled-components";

export const HeaderArea = styled.header`
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;

    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      height: 60px;

      .logo-1,
      .logo-2,
      .logo-3,
      .logo-4 {
        font-size: 27px;
        font-weight: bold;
      }
      a{
        text-decoration:none ;
        
      }
      .logo-1 {
        color: #ff0000;
      }
      .logo-2 {
        color: #00ff00;
      }
      .logo-3 {
        color: #0000ff;
      }
      .logo-4 {
        color: #2c0ff0;
      }
    }
  }
`;
