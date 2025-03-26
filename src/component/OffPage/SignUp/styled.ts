import styled from "styled-components";

export const StyledSignUp = styled.div<any>`
  @media (min-width: 800px) {
    width: 50%;
    .sign-in {
      padding: 0px 15px 0 15px;
      border-left: 1px solid #333;
    }
  }
  @media (max-width: 800px) {
    .sign-in {
      margin-top: 20px;
      border-top: 1px solid #333;
      padding: 20px 15px 0 15px;
    }
    width: 100%;
  }
  .sign-in {
    display: grid;
    .title-login {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .form-login {
      width: 100%;
      .title {
        color: #fff;
      }
      input {
        margin: 10px 0;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 13px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        color: #333;
        font-size: 0.97em;
        height: 2.507em;
        max-width: 100%;
        padding: 0 0.75em;
        transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
        vertical-align: middle;
        width: 100%;
      }
      p {
        font-size: 13px;
        color: red;
      }
    }
    .memorize {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .btn-login {
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
    .forgot-password {
      margin-top: 10px;
      margin-bottom: 0.5em;
      color: #f68002;
    }
  }
`;
