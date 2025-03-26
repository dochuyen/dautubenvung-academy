import styled from "styled-components";
export const StyledProductDetail = styled.div<any>`
  margin-top: 50px;
  padding: 0 15px;

  @media (min-width: 1200px) {
    .box-first {
      display: flex;
      justify-content: space-between;

      .info-product {
        width: 55%;

        .img {
          width: 100%;

          .img-detail {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            width: 100%;
            border-radius: 24px;
            height: 300px;
          }
        }
      }
      .technical-information {
        width: 47%;
      }
    }
    .describe {
      .describe-first {
        .wp-caption-text {
          .title-product {
            width: 10% !important;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .box-first {
      display: grid;
      .info-product {
        .img {
          .img-detail {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            width: 100%;
            border-radius: 24px;
          }
        }
      }
      .technical-information {
        width: 100% !important;
        gap: 10px;
      }
    }
    .describe {
      .describe-second {
        .box1 {
          flex-direction: column !important;
          .title-des {
            width: 100% !important;
            font-size: 30px !important;
          }
          .des {
            width: 100% !important;
            .box-submit {
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }
  }
  .box-first {
    .info-product {
    }
    .technical-information {
      width: 42%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title-product {
        font-weight: 500;
        font-size: 20px;
        color: #fff;
        font-family: sans-serif;
      }
      .text {
        color: #fff;
        font-size: 13px;
        text-align: justify;
      }
      .price {
        font-size: 17px !important;

        color: #131c2e !important;
        text-align: center;
        background: #ffc833;
        border-radius: 20px;
        padding: 10px 20px;
        width: 40%;
      }
      .row-info {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        clear: both;
        width: 100%;
        padding: 5px 0;
        border-top: 1px dashed #eaeaea;
        border-bottom: 1px dashed #eaeaea;
        font-size: 14px;
        height: 40px;
        .left {
          color: #ffff;
        }
        .right {
          text-align: center;
          width: 30%;
          display: inline-block;
          background: #e4e4e4;
          border-radius: 4px;
          color: #292929;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .btn-add-shopping-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 3px 5px 3px 5px;
        height: 45px;
        width: 100%;
        color: #131c2e;
        font-weight: 500;
        font-size: 19px;
        background-color: #56d699;
        border: none;
        margin-bottom: 10px;
        font-family: revert;
        &:hover {
          transform: scale(1.01);
          box-shadow: none;
          border: 1px solid #09ff37;
        }
      }
    }
  }
  .btn-membership {
    border-radius: 10px;
    padding: 3px 5px 3px 5px;
    height: 45px;
    width: 100%;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    background-color: #f26b54;
    border: none;
    margin-bottom: 10px;
  }

  .describe {
    .describe-first {
      .title {
        padding: 0 10px;
        border-top-color: #3493fa;
        background: #eaeaea;
        font-family: "roboto", sans-serif;
        font-size: 15px;
        text-transform: none;
        color: black;
        font-weight: 700;
        height: 40px;
        display: flex;
        align-items: center;
      }

      .warning {
        font-style: italic;
        color: #ff0000;
        font-size: 16px;
        font-weight: bold;
      }
      .wp-caption-text {
        background: rgba(0, 0, 0, 0.05);
        font-size: 0.9em;

        padding: 0.4em;
        .title-product {
          font-size: 17px !important;
          font-weight: bold;
          color: #131c2e !important;
          text-align: center;
          background: #ffc833;
          border-radius: 20px;
          padding: 10px 20px;
          width: 20%;
        }
      }
      .text-des {
        color: #ffff;
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 13px;
      }
    }
    .describe-second {
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 45px;

      .box1 {
        display: flex;
        gap: 20px;
        .title-des {
          width: 40%;
          font-family: Arial, sans-serif;
          font-size: 50px;
          color: #00369c; /* Text fill color */
          font-weight: 600;
        }
        .des {
          width: 60%;
          blockquote {
            text-align: justify;

            color: #333;
            font-size: 1em;
            /* font-style: italic; */
            margin: 0 0 2.3em;

            position: relative;
          }
          .btn-add-shopping-cart-des {
            cursor: pointer;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            padding: 3px 5px 3px 5px;
            height: 45px;
            width: 80%;
            color: #131c2e;
            font-weight: 500;
            font-size: 19px;
            background-color: #56d699;
            border: none;
            margin-bottom: 10px;
            font-family: revert;
            &:hover {
              transform: scale(1.01);

              box-shadow: none;
              border: 1px solid #09ff37;
            }
          }
        }
      }
      .box2 {
        display: flex;
        width: 100%;
        justify-content: flex-end;
      }
    }
  }
`;
