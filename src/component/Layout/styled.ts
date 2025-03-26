import styled from "styled-components";

export const StyledLayout = styled.div<any>`
  @media (min-width: 800px) {
    width: 100%;
    .wrapper-footer {
      .box {
        .img {
          width: 53%;
          height: 240px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .wrapper-footer {
      .box {
        display: grid;
        flex-direction: column !important;
        align-items: center;
        .img {
          width: 100%;
          height: 240px;
        }
        .box-text {
          gap: 16px;
          width: 88% !important;
          .box-btn-group {
            .icon-next {
              width: 20% !important;
            }
            .second {
              padding: 6px 20px !important;
            }
          }
        }
      }
    }
  }
  .wrapper-footer {
    padding: 30px 15px;
    .title-group {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.3em; /* Adjust this value as needed */
      font-family: Arial, sans-serif;
    }
    .box {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;

      padding: 6px;
      border-radius: 5px;
      gap: 30px;

      .box-text {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        width: calc(50% - 24px);
        background: linear-gradient(to bottom, #0f1a53, #2081f7);
        border-radius: 16px;
        .first {
          font-weight: 400;
          font-family: "system-ui";
          /* margin-bottom: 0.5em; */
          margin-top: 0;
          text-rendering: optimizeSpeed;
          width: 100%;
          font-size: 17px;
          color: #fff;
        }
        .demo-group {
          font-size: 11px;
          color: #fff;
          font-family: sans-serif;
        }
        .box-btn-group {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          .icon-next {
            width: 15%;
          }
          .second {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            color: #031b55;
            font-weight: 700;
            background-color: #56d699;
            font-size: 13px;
            padding: 0 20px;
            height: 100%;
            border-radius: 20px;
            &:hover {
              border: 1.5px solid #ffcf03;
            }
          }
        }
      }
    }
  }
`;
