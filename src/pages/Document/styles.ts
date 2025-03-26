import styled from "styled-components";
export const StyleDocument = styled.div`
  color: #fff;
  padding: 0 15px;
  @media (max-width: 800px) {
    .box-first-document {
      flex-direction: column !important;
      align-items: center;
    }
    .icon-desktop {
      display: none;
    }
    .icon-mobile {
      display: block !important;
    }
    .btn-click {
      width: 80% !important;
    }
    .me {
      flex-direction: column !important;
      align-items: center;
      width: 100% !important;
      gap: 8px;
      .img-avt {
        margin: 0 !important;
      }
      .box-mxh {
        display: flex;
        gap: 8px !important;
        .ladi-element {
          margin: 0 !important;
          .ladi-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            .ladi-paragraph {
              font-size: 11px;
              padding: 0 15px;
              text-align: justify;
            }
          }
        }
      }
    }
    .ladi-element {
      .ladi-transition {
        font-size: 15px;
        padding: 0 15px;
        text-align: justify;
      }
    }
    .box-input {
      .form-checkout {
        width: 90% !important;
      }
    }
    .content-ebook {
      font-size: 15px;
      text-align: justify;
    }
  }
  .icon-mobile {
    display: none;
  }
  .box-first-document {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    gap: 16px;
    .info-ebook {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 70%;
      .title-ebook {
        font-size: 32px;
        font-family: Roboto, sans-serif;
        font-weight: bold;
        line-height: 1.6;
        color: #fff;
        .des {
          font-size: 15px;
          color: #fff;
        }
      }
      .box-btn-first {
        display: flex;
        justify-content: center;
        .btn-click {
          cursor: pointer;
          width: 50%;
          color: #fff;
          font-weight: 600;
          height: 85px;
          background-color: #ee4d2d;
          padding: 20px;
          font-size: 13px;
          border-radius: 30px;
          border: none;
          display: grid;
          gap: 8px;
          span {
            font-weight: 400;
          }
          &:hover {
            transform: scale(1.01);
          }
        }
      }
    }
  }
  .content-ebook {
    text-align: justify;
    font-size: 15px;
    margin-top: 40px;
  }
  .my-info {
    .title {
      margin: 30px 0;
      text-align: center;
      font-size: 20px;
      line-height: 1.4;
      font-weight: bold;
      color: #fff;
    }
    .me {
      width: 90%;
      display: flex;
      justify-content: space-between;
      .img-avt {
        margin-left: 80px;
      }
      .box-mxh {
        display: flex;
        gap: 50px;
        justify-content: space-between;
        align-items: center;
        .ladi-element {
          cursor: pointer;
          color: #fff;
          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }
    .ladi-element {
      margin-top: 20px;
    }
  }
  .box-btn-second {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    .btn-click {
      cursor: pointer;
      width: 35%;
      color: #fff;
      font-weight: 600;
      height: 85px;
      background-color: #ee4d2d;
      padding: 20px;
      font-size: 13px;
      border-radius: 30px;
      border: none;
      display: grid;
      gap: 8px;
      span {
        font-weight: 400;
      }
      &:hover {
        transform: scale(1.01);
      }
    }
  }
  .box-input {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .form-checkout {
      width: 45%;

      display: flex;
      flex-direction: column;
      border-radius: 8px;
      padding: 16px 30px 25px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;

      .form-input {
        margin-bottom: 10px;
        .top {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
        }
        .bottom {
          color: #69727d;
          background-color: #d4d4d4;
          font-size: 14px;
          border: none;
          font-weight: 400;
          padding: 10px;
          width: calc(100% - 20px);
          border-radius: 20px;
        }
      }
      .box-btn-mail {
        display: flex;
        width: 100%;
        justify-content: center;
        .btn-order {
          margin-top: 20px;
          cursor: pointer;
          background-color: #42a732;
          width: 100%;
          float: none;
          color: var(--purchase-button-normal-text-color, #fff);
          min-height: auto;
          padding: var(--purchase-button-padding, 1em 1em);
          border-radius: var(--purchase-button-border-radius, 20px);
          border: none;
          &:hover {
            transform: scale(1.01);
          }
        }
      }
    }
  }
`;
