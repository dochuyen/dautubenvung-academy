import styled from "styled-components";
export const StyleCheckout = styled.div<any>`
  padding: 0 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    .form-checkout {
      width: 100% !important;
    }
    .box-second {
      width: 100% !important;
      .product-buy {
        width: 85% !important;
      }
    }
  }
  .title {
    color: #fff;
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
    padding: 30px 16px 16px 16px;
  }
  .box-first {
    width: 100%;
    justify-content: center;
    display: flex;
    .returning {
      border-radius: 3px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      display: flex;
      justify-content: center;
      gap: 8px;
      .login {
        text-decoration: none;
        color: #5bc0de;
      }
    }
    .form-checkout {
      width: 53.5%;

      display: flex;
      flex-direction: column;
      border-radius: 8px;
      padding: 16px 30px 25px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      .title-form {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 20px;
        color: #fff;
      }
      .form-input {
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
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
          border-radius: 13px;
        }
      }
    }
  }
  .box-second {
    width: 60%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .product-buy {
      width: 90%;
      border-radius: 8px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      display: grid;
      .title {
        font-size: 12px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: var(--sections-title-spacing, 30px);
        color: var(--sections-title-color, #fff);
      }
      .shop_table {
        .order-total,
        .cart-subtotal,
        .cart_item,
        .header-table {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          width: calc(100% - 30px);
        }
        .cart_item {
          .product-name {
          }
        }
      }
    }
    .payment {
      border-radius: 8px;
      padding: 16px 30px 0px 16;

      /* border: 1px solid #d5d8dc; */
      display: grid;
      .title-payment {
        font-size: 14px;
        text-align: left;
        color: var(--sections-radio-buttons-color, #69727d);
      }
      .payment_box {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        margin-top: 0;
        color: #fff;
        p {
          margin-top: 5px;
        }
      }
    }
    .btn-order {
      margin-bottom: 20px;
      margin-top: 15px;
      margin-left: 10px;
      cursor: pointer;
      background-color: #42a732;
      width: calc(100% - 20px);
      float: none;
      color: var(--purchase-button-normal-text-color, #fff);
      min-height: auto;
      padding: var(--purchase-button-padding, 1em 1em);
      border-radius: var(--purchase-button-border-radius, 13px);
      border: none;
    }
  }
`;
