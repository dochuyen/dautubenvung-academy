import React, { useEffect, useState } from "react";
import { StyledSignUp } from "./styled";
import axios from "axios";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { useNavigation } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

type NotificationPlacement = NotificationArgsProps["placement"];
export const SignUp = () => {
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordFirst, setPassWordFirst] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errPassWord, setErrPassWord] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassFirst, setShowPassFirst] = useState(false);
  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: `Notification success`,
      description: "Đăng ký tài khoản thành công",
      placement,
    });
  };
  useEffect(() => {
    if (passWord !== passWordFirst) {
      setErrPassWord(true);
    } else {
      setErrPassWord(false);
    }
  }, [passWord, passWordFirst]);
  const handleSignUp = () => {
    if (email === "") {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
    if (phoneNumber === "") {
      setErrPhoneNumber(true);
    } else {
      setErrPhoneNumber(false);
    }
    if (passWord !== passWordFirst) {
      setErrPassWord(true);
    } else {
      setErrPassWord(false);
    }
    if (
      passWord !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      passWord === passWordFirst
    ) {
      axios
        .post(`${process.env.REACT_APP_PORT}/auth/register`, {
          email: email,
          name: "",
          phone: phoneNumber,
          password: passWord,
        })
        .then((res) => {
          openNotification("topRight");
          setEmail("");
          setPassWord("");
          setPhoneNumber("");
          setPassWordFirst("");
        })
        .catch((err) =>
          api.error({
            message: `Lỗi`,
            description: "Đã có tài khoản tương tự",
            placement: "topRight",
          })
        );
    }
  };
  return (
    <StyledSignUp>
      {contextHolder}{" "}
      <div className="sign-in">
        <div className="title-login">Đăng ký</div>
        <div className="form-login">
          <div className="title">Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          {errEmail ? (
            <p style={{ marginTop: "0px" }}>Email không được để trống</p>
          ) : (
            <></>
          )}
        </div>
        <div className="form-login">
          <div className="title">Số điện thoại</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
          {errPhoneNumber ? (
            <p style={{ marginTop: "0px" }}>
              Số điện thoại không được để trống
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="form-login">
          <div className="title">Mật khẩu</div>
          <div style={{ position: "relative" }}>
            <input
              value={passWordFirst}
              onChange={(e) => setPassWordFirst(e.target.value)}
              type={showPassFirst ? "text" : "password"}
            />
            <div
              onClick={() => setShowPassFirst(!showPassFirst)}
              style={{
                position: "absolute",
                right: 20,
                top: 22,
                cursor: "pointer",
              }}
            >
              {showPassFirst ? <IoMdEye /> : <IoIosEyeOff />}
            </div>
          </div>
        </div>
        <div className="form-login">
          <div className="title">Nhập lại mật khẩu</div>
          <div style={{ position: "relative" }}>
            <input
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              type={showPass ? "text" : "password"}
            />
            <div
              onClick={() => setShowPass(!showPass)}
              style={{
                position: "absolute",
                right: 20,
                top: 22,
                cursor: "pointer",
              }}
            >
              {showPass ? <IoMdEye /> : <IoIosEyeOff />}
            </div>
          </div>
          {errPassWord ? (
            <p style={{ margin: "0" }}>Mật khẩu không trùng nhau</p>
          ) : (
            <></>
          )}
        </div>
        {/* <div className="memorize">
          <input type="checkbox" name="" id="" />
          <div>Ghi nhớ mật khẩu</div>
        </div> */}
        <button onClick={handleSignUp} className="btn-login">
          ĐĂNG KÝ
        </button>
        {/* <Link to="/forgot-password" className="forgot-password">
          Quên mật khẩu ?
        </Link> */}
      </div>
    </StyledSignUp>
  );
};
