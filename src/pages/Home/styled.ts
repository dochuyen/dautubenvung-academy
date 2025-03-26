import { styled } from "styled-components";

// type Props = {
//   screen_mode: string | "dark" | "light";
// };

export const StyledHome = styled.div<any>`
  @media (max-width: 886px) {
    .box-headerhome {
      /* width: 100%; */
      padding: 0 15px;
      .banner-header {
        display: none;
      }
    }
    .company {
      flex-direction: column;
      padding: 0 15px !important;
      margin-bottom: 50px;
      .img-company {
        width: 100% !important;
        .avt-cty {
          height: 246px !important;
        }
        .blurred-section {
          display: none;
        }
      }
      .info-company {
        position: static !important;
        width: 100% !important;
        .info-child {
          position: static !important;
          .text-company {
            padding-right: 10px;
            height: 165px !important;
          }
        }
      }
    }
    .container {
      /* padding: 0 0px 0 17px; */
      width: 100%;

      .carousel {
        width: 95%;
        background-image: linear-gradient(to bottom, white, #ecf3ff);

        border-radius: 24px;
        padding: 10px 10px;
        .flex-course {
          padding: 20px 25px;
          .item-caroulsel {
            &:hover {
              transform: scale(1.05);
              border: 1px solid #b2bec3;

              box-shadow: none;
            }

            transition: transform 400ms, box-shadow 400ms;
            text-decoration: none;
            display: flex;
            width: 281px;

            padding: 8px;

            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            border-radius: 3px;

            will-change: transform, box-shadow;
            .title {
              display: flex;
              align-items: center;
              gap: 24px;
              width: 100%;
              .text-title {
                color: #3594ef;
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
              }
            }
            .body {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              align-self: stretch;
              .body-first {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                align-self: stretch;
                gap: 10px;
                .item-first {
                  color: ${(props) =>
                    props.screen_mode === "dark" ? "#fff" : "#080808"};
                  font-family: Roboto;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                }
                .text-demo {
                  color: #020c2f;
                  font-size: 11px;
                  font-family: Arial, sans-serif;
                }
                .box-buy {
                  display: flex;
                  gap: 16px;
                  width: 100%;
                  margin-top: 20px;
                  justify-content: center;
                  .price {
                    font-size: 11px !important;
                    font-weight: bold;
                    color: #131c2e !important;
                    text-align: center;
                    background: #ffcf03;
                    border-radius: 20px;
                    padding: 3px 20px;
                    display: flex;
                    align-items: center;
                    font-family: system-ui;
                  }
                  .buy-now {
                    cursor: pointer;
                    color: #020c2f;
                    border: none;
                    background-color: #56d699;
                    border-radius: 20px;
                    padding: 3px 15px;
                    font-family: sans-serif;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 11px;
                    justify-content: center;
                    &:hover {
                      border: 1px solid #000;
                    }
                  }
                }
              }
              .body-second {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                align-self: stretch;
                .item-second {
                  display: flex;
                  align-items: flex-start;
                  gap: 4px;
                  .item {
                    color: ${(props) =>
                      props.screen_mode === "dark" ? "#fff" : "#080808"};
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                  }
                  .item-value {
                    color: ${(props) =>
                      props.screen_mode === "dark"
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgba(8, 8, 8, 0.5)"};
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                  }
                }
              }
            }
          }
        }
      }
      .member {
        margin-top: 24px;
        margin-bottom: 30px;
        background: linear-gradient(to top, #8a97ab, #ffffff);
        width: 100%;
        border-radius: 5px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;

        .text-member {
          font-size: 13px;
          color: #051e5c;
          font-weight: 500;
          text-align: center;
        }

        .btn-member {
          text-decoration: none;
          background-color: #ffc833;
          padding: 10px 5px;
          text-align: center;
          height: 100%;
          width: 27%;
          border-radius: 20px;
          color: black;
          font-weight: 500;
          font-size: 13px;
          &:hover {
            transform: scale(1.04);

            box-shadow: none;
            border: 1px solid #7bed9f;
          }
          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #051e5c;
          }
        }
      }
      .box-shadow-2 {
        background-color: rgb(242, 241, 182);
        border-color: rgb(52, 147, 250);
        border-radius: 20px;
        margin-top: 20px;
        padding: 15px 10px 10px 10px;
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.16),
          0 3px 6px rgba(0, 0, 0, 0.23);
        border-style: dashed;
      }
    }
  }
  @media (min-width: 886px) {
    .box-headerhome {
      .banner-header {
        display: block;
      }
    }
    .container {
      /* padding: 0 0px 0 17px; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .carousel {
        background-image: linear-gradient(to bottom, white, #ecf3ff);

        border-radius: 24px;
        padding: 10px 10px;
        width: 98%;
        .flex-course {
          padding: 20px 100px;
          .item-caroulsel {
            &:hover {
              transform: scale(1.05);
              border: 1px solid #b2bec3;

              box-shadow: none;
            }
            transition: transform 400ms, box-shadow 400ms;
            text-decoration: none;
            display: flex;
            width: 281px;

            padding: 8px;
            justify-content: space-between;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            border-radius: 3px;

            will-change: transform, box-shadow;
            .title {
              display: flex;
              align-items: center;
              gap: 24px;
              width: 100%;
              .text-title {
                color: #3594ef;
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
              }
            }
            .body {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              align-self: stretch;
              .body-first {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                align-self: stretch;
                gap: 10px;
                .item-first {
                  color: ${(props) =>
                    props.screen_mode === "dark" ? "#fff" : "#080808"};
                  font-family: Roboto;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                }
                .text-demo {
                  color: #020c2f;
                  font-size: 11px;
                  font-family: Arial, sans-serif;
                }
                .box-buy {
                  display: flex;
                  gap: 16px;
                  width: 100%;
                  margin-top: 20px;
                  justify-content: center;
                  .price {
                    font-size: 11px !important;
                    font-weight: bold;
                    color: #131c2e !important;
                    text-align: center;
                    background: #ffcf03;
                    border-radius: 20px;
                    padding: 3px 20px;
                    display: flex;
                    align-items: center;
                    font-family: system-ui;
                  }
                  .buy-now {
                    cursor: pointer;
                    color: #020c2f;
                    border: none;
                    background-color: #56d699;
                    border-radius: 20px;
                    padding: 3px 15px;
                    font-family: sans-serif;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 11px;
                    justify-content: center;
                    &:hover {
                      border: 1px solid #000;
                    }
                  }
                }
              }
              .body-second {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                align-self: stretch;
                .item-second {
                  display: flex;
                  align-items: flex-start;
                  gap: 4px;
                  .item {
                    color: ${(props) =>
                      props.screen_mode === "dark" ? "#fff" : "#080808"};
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                  }
                  .item-value {
                    color: ${(props) =>
                      props.screen_mode === "dark"
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgba(8, 8, 8, 0.5)"};
                    font-family: Roboto;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                  }
                }
              }
            }
          }
        }
      }
      .member {
        margin: 30px 0;
        background: linear-gradient(to top, #8a97ab, #ffffff);
        width: 85%;
        border-radius: 5px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;

        .text-member {
          font-size: 115%;
          color: #051e5c;
          font-weight: 500;
          text-align: center;
        }

        .btn-member {
          text-decoration: none;
          background-color: #ffc833;

          text-align: center;
          height: 100%;
          width: 27%;
          border-radius: 20px;
          color: black;
          font-weight: 500;
          font-size: 20px;
          &:hover {
            transform: scale(1.04);

            box-shadow: none;
            border: 1px solid #7bed9f;
          }
          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #051e5c;
          }
        }
      }
      .box-shadow-2 {
        background-color: rgb(242, 241, 182);
        border-color: rgb(52, 147, 250);
        border-radius: 20px;
        margin-top: 20px;
        padding: 15px 10px 10px 10px;
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.16),
          0 3px 6px rgba(0, 0, 0, 0.23);
        border-style: dashed;
      }
    }
  }
  .lotrinh {
    margin-bottom: 30px;
  }
  .company {
    margin-top: 50px;
    display: flex;
    gap: 16px;
    .img-company {
      position: relative;
      display: inline-block;
      width: 60%;
      .avt-cty {
        height: 300px;
      }
      .blurred-section {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 20%;
        height: 300px;
        background: linear-gradient(to left, #072563, rgba(255, 255, 255, 0));
      }
    }
    .info-company {
      width: calc(100% - 40% - 16px);
      position: relative;
      .box-icon {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 10px;

        width: 100%;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 23px;
          height: 23px;
          border: 1px solid #ffffff;
          border-radius: 9999999px;
          background-color: #fff;
          &:hover {
            transform: scale(1.05);
            width: 25px;
            height: 25px;
            box-shadow: none;
            border: 1px solid #b2bec3;
          }
        }
      }
      .info-child {
        position: absolute;
        left: -33px;
        .title-company {
          margin-bottom: 10px;
          h1 {
            color: #ffff;
            margin: 3px 0;
            font-weight: 500;
          }
        }
        .text-company {
          border-left: 2px solid #f0f3fa;
          padding-left: 30px;
          color: #f0f3fa;
          font-size: 12px;
          text-align: justify;
          height: 150px;
          blockquote {
            margin: 0 !important;
          }
        }
      }
    }
  }
  .title-course {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    /* margin-bottom: 10px; */
    color: #131c2e;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.3em; /* Adjust this value as needed */
    font-family: Arial, sans-serif;
    text-align: center;
  }
  .box-headerhome {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    .banner-header {
      width: calc(100% - 65%);
      border-radius: 3px;
    }
  }
  .banner {
    margin-top: 20px;
    width: 100%;
    .img-banner {
      width: 100%;
      height: 166px;
    }
  }
  .wrapper-book {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .title-book {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.3em; /* Adjust this value as needed */
      font-family: Arial, sans-serif;
    }
    .ant-flex-wrap-wrap {
      justify-content: center;
      .item-caroulsel-book {
        /* &:hover {
          transform: scale(1.05);
          width: 150px;

          box-shadow: none;
          border: 1px solid #b2bec3;
        } */
        transition: transform 400ms, box-shadow 400ms;
        text-decoration: none;
        display: flex;
        width: 147px;

        padding: 8px;

        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        border-radius: 3px;

        will-change: transform, box-shadow;
        .title {
          display: flex;
          align-items: center;
          gap: 24px;
          width: 100%;
          .text-title {
            color: #3594ef;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
        .body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
          .body-first {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
            gap: 10px;
            .item-first {
              font-family: Roboto;
              font-size: 17px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
            .text-demo {
              color: #bababa;
              font-size: 11px;
              font-family: Arial, sans-serif;
            }
            .box-buy {
              display: flex;
              gap: 16px;
              justify-content: center;

              flex-direction: column;
              .price {
                font-size: 11px !important;
                font-weight: bold;
                color: #020c2f !important;
                text-align: center;
                background: #ffcf03;
                border-radius: 20px;
                padding: 3px 15px;
                font-family: system-ui;
              }
              .buy-now {
                cursor: pointer;
                color: #020c2f;
                border: none;
                background-color: #56d699;
                border-radius: 20px;
                padding: 3px 15px;
                font-size: 11px !important;
                font-weight: bold;
                display: flex;
                align-items: center;
                font-weight: bold;
                font-family: sans-serif;
              }
            }
          }
          .body-second {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
            .item-second {
              display: flex;
              align-items: flex-start;
              gap: 4px;
              .item {
                color: ${(props) =>
                  props.screen_mode === "dark" ? "#fff" : "#080808"};
                font-family: Roboto;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
              .item-value {
                color: ${(props) =>
                  props.screen_mode === "dark"
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(8, 8, 8, 0.5)"};
                font-family: Roboto;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
          }
        }
      }
    }
    .ant-flex-gap-small {
      gap: 16px !important;
    }
    .member {
      margin: 30px 0;
      background-color: #80bd01;
      padding: 30px;
      display: flex;
      gap: 20px;

      .text-member {
        font-size: 130%;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
      }
      .box-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        .btn-member {
          text-decoration: none;
          background-color: #3594ef;
          padding: 20px;
          text-align: center;
          width: 100px;
          border-radius: 5px;
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #051e5c;
          }
        }
      }
    }
  }
`;
