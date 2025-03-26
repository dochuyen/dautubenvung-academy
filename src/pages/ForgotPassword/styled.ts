import styled from "styled-components";
export const StyledForgotPassWord = styled.div<any>`
  margin-top: 30px;
  padding: 0 15px;
  .form-input {
    margin-bottom: 5px;
    .top {
      font-size: 14px;
      color: #69727d;
      margin-bottom: 10px;
    }
    .bottom {
      color: #69727d;
      background-color: #f9fafa;
      font-size: 14px;
      border: none;
      font-weight: 400;
      padding: 2px;
      width: calc(100% - 30px);
      border-radius: 13px;
      height: 2.507em;
      padding: 0 20px;
    }
    .btn-sendcode {
      margin: 10px 0;
      background-color: #f98002;
      border: none;
      border-radius: 13px;
      padding: 10px 10px;
      color: #fff;
    }
    p {
      font-size: 13px;
      color: red;
    }
  }
  .btnforgot {
    background-color: #3493fa;
    border: 1px solid transparent;
    border-radius: 13px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 0.97em;
    font-weight: bolder;
    letter-spacing: 0.03em;
    line-height: 2.4em;
    margin-top: 10px;
    max-width: 100%;
    min-height: 2.5em;
    padding: 0 1.2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    text-shadow: none;
    text-transform: uppercase;
    transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
      opacity 0.3s, color 0.3s;
    vertical-align: middle;
  }
`;
