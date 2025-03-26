import styled from "styled-components";
export const StyleFooter = styled.div<any>`
  background-image: linear-gradient(white, #ecf3ff);

  @media (max-width: 800px) {
    .absolute-footer {
      padding: 9px 15px !important;
    }
    .text {
      font-size: 11px !important;
    }
    .box-icon {
      padding-bottom: 7px !important;
    }
    .hotline {
      font-size: 11px !important;
    }
  }
  .absolute-footer {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 0;
    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 3px;
      .footer-first {
        display: flex;
        flex-direction: column;

        .text {
          font-size: 12px;
          color: #0f1b54;
          margin-left: 3px;
        }
      }
      .footer-second {
        display: flex;
        justify-content: space-between;

        .footer-secondary {
          display: grid;
          gap: 8px;
          .footer-text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #0f1b54;
            font-size: 13px;
            a {
              text-decoration: none;
              color: #f68002;
            }
          }
        }
      }
      .info-company {
        .box-icon {
          display: flex;
          gap: 8px;

          align-items: center;
          padding-bottom: 8px;
          justify-content: flex-end;
          width: 100%;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 9999999px;
          }
        }
        .hotline {
          font-size: 12px;
          color: #0f1b54;
          margin-left: 3px;
          text-align: center;
        }
      }
      .footer-primary {
        display: flex;
        justify-content: center;
        .copyright-footer {
          display: grid;
          justify-content: center;
          align-items: center;
          h4,
          p {
            color: #fff;
            margin: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .contact {
    position: fixed;
    bottom: 100px;
    right: 10px;
    display: grid;
    gap: 10px;
    .icon-rot {
      animation: phone-vr-circle-fill 1s infinite alternate;
    }
  }
  @media (max-width: 849px) {
    .medium-text-center .pull-left,
    .medium-text-center .pull-right {
      float: none;
    }
  }
  @keyframes phone-vr-circle-fill {
    0%,
    50%,
    100% {
      -webkit-transform: rotate(0) scale(1) skew(1deg);
    }
    10%,
    30% {
      -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
    }
    20%,
    40% {
      -webkit-transform: rotate(25deg) scale(1) skew(1deg);
    }
  }
`;
