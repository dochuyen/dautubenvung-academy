import styled from "styled-components";
export const StyleCheckoutQR = styled.div`
  @media (max-width: 800px) {
    .img-qr {
      width: 74% !important;
    }
    .table-bordered {
      width: auto !important;
    }
    .order_details_mobile {
      display: flex !important;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 0 3em;
      list-style: none;
      padding: 0;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        li:first-child {
          float: left;
          margin: 0 2em;
          text-transform: uppercase;
          font-size: 0.55em;
          line-height: 1;
          border-left: 1px dashed #cfc8d8;
          padding: 0 2em;

          list-style-type: none;
          color: #fff;
        }
        li {
          margin: 10px 0;
          float: left;
          margin-right: 2em;
          text-transform: uppercase;
          font-size: 0.55em;
          line-height: 1;
          border-right: 1px dashed #cfc8d8;
          padding-right: 2em;

          list-style-type: none;
          color: #fff;
          strong {
            display: block;
            font-size: 1.4em;
            text-transform: none;
            line-height: 1.5;
          }
        }
      }
    }
    .order_details {
      display: none !important;
    }
  }
  @media (min-width: 800px;) {
    .box {
    }
  }
  .title-checkqr {
    font-size: 1.75rem;
    text-align: center;
    color: #fff;
  }
  .box {
    padding: 0 15px;
    .thanks {
      font-size: 14px;
      line-height: 21px;
      color: #ced7e2;
    }
    .order_details_mobile {
      display: none;
    }
    .order_details {
      display: flex;
      justify-content: center;

      margin: 0 0 3em;
      list-style: none;
      padding: 0;
      li:first-child {
        float: left;
        margin: 0 2em;
        text-transform: uppercase;
        font-size: 0.715em;
        line-height: 1;
        border-left: 1px dashed #cfc8d8;
        padding: 0 2em;

        list-style-type: none;
        color: #fff;
      }
      li {
        float: left;
        margin-right: 2em;
        text-transform: uppercase;
        font-size: 0.715em;
        line-height: 1;
        border-right: 1px dashed #cfc8d8;
        padding-right: 2em;
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
        color: #fff;
        strong {
          display: block;
          font-size: 1.4em;
          text-transform: none;
          line-height: 1.5;
        }
      }
    }
    .box-qr {
      .titleqr {
        text-align: center;
        margin-top: 20px;
        font-size: 1.8rem;
        color: #fff;
        font-weight: 500;
      }
      .img-qr {
        width: 47%;
      }
      .table-bordered {
        width: 45%;
      }
      .link-login {
        color: #fff;
        background-color: #42a732;
        padding: 20px;
        border-radius: 13px;
        &:hover {
          transform: scale(1.02);
        }
      }
      table td {
        width: 50%;
        padding: 15px;
        line-height: 1.5;
        vertical-align: top;
        border: 1px solid hsla(0, 0%, 50.2%, 0.5019607843);
        color: #fff;
      }
      .btn-pay {
        margin: 20px 0;
        display: inline-block;
        font-weight: 400;
        color: #c36;
        text-align: center;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid #c36;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 3px;
        transition: all 0.3s;
      }
    }
    .woocommerce-order-details {
      .woocommerce-order-details__title {
        color: #fff;
      }
      .order_details {
        text-align: left;
        width: 100%;
        thead {
          tr {
            .product-name {
              color: #fff;
            }
            .product-total {
              color: #fff;
            }
          }
        }
        tbody {
          tr {
            td {
              .link {
                color: var(--links-normal-color, #5bc0de);
                text-decoration: none;
              }
            }
          }
        }
        tfoot {
          tr {
            th {
              color: #fff;
            }
            td {
              color: #fff;
            }
          }
        }
        td {
          padding: 15px 0;
        }
      }
    }
  }
  .btnDownloadQR {
    width: 100%;
    border-radius: 0;
    border: none;
    padding: 10px 10px;
    border-color: #0274be;
    background-color: #0274be;
    color: #ffffff;
    line-height: 1;
  }
`;
