import React, { useContext, useEffect, useState } from "react";
import { StyleLogin } from "./styled";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { SignUp } from "../SignUp/SignUp";
import axios from "axios";
import io from "socket.io-client";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserInfo } from "../../../redux/app";
import { selectAppSelector } from "@/redux/app/selector";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { MyContext } from "../../Layout/Layout";
type NotificationPlacement = NotificationArgsProps["placement"];
export const Login = () => {
  const context = useContext(MyContext);
  const [api, contextHolder] = notification.useNotification();
  const nextHome = useNavigate();
  const dispath = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errPassWord, setErrPassWord] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { value, setValue } = context;
  if (!context) {
    throw new Error("Login must be used within a MyProvider");
  }
  const handleSubmit = () => {
    if (phoneNumber === "") {
      setErrPhoneNumber(true);
    } else {
      setErrPhoneNumber(false);
    }
    if (passWord === "") {
      setErrPassWord(true);
    } else {
      setErrPassWord(false);
    }

    if (phoneNumber !== "" || passWord !== "") {
      axios
        .post(`${process.env.REACT_APP_PORT}/auth/login`, {
          phone: phoneNumber,
          password: passWord,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            api.success({
              message: `Notification success`,
              description: "Đăng nhập thành công!",
              placement: "bottomRight",
            });
            dispath(setUserInfo(res.data.user_id));
            dispath(setLogin());
            nextHome("/");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userID", res.data.user_id);
            localStorage.setItem("info", res.data.info.phone);
            setValue(res.data.user_id);
          } else if (res.status === 404) {
            api.error({
              message: `Notification success`,
              description: "Tài khoản, mật khẩu không đúng!",
              placement: "topRight",
            });
          }
        })
        .catch((err) => {
          api.error({
            message: `Notification success`,
            description: "Tài khoản, mật khẩu không đúng!",
            placement: "topRight",
          });
        });
    }
  };
  return (
    <StyleLogin>
      {contextHolder}
      <div className="login">
        <div className="title-login">Đăng nhập</div>

        <div className="form-login">
          <div className="title">Số điện thoại</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
          {errPhoneNumber ? (
            <p style={{ margin: 0 }}>Số điện thoại không được để trống</p>
          ) : (
            <></>
          )}
          <p></p>
        </div>

        <div className="form-login">
          <div className="title">Mật khẩu</div>
          <div style={{ position: "relative" }}>
            <input
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              type={showPass ? "text" : "password"}
            />
            <div
              onClick={() => setShowPass(!showPass)}
              style={{ position: "absolute", right: 20, top: 22 }}
            >
              {showPass ? <IoMdEye /> : <IoIosEyeOff />}
            </div>
          </div>

          {errPassWord ? (
            <p style={{ margin: 0 }}>Mật khẩu không được để trống</p>
          ) : (
            <></>
          )}
        </div>
        {/* <div className="memorize">
          <input type="checkbox" name="" id="" />
          <div>Ghi nhớ mật khẩu</div>
        </div> */}
        <button onClick={handleSubmit} className="btn-login">
          ĐĂNG NHẬP
        </button>
        <Link to="/forgot-password" className="forgot-password">
          Quên mật khẩu ?
        </Link>
      </div>
    </StyleLogin>
  );
};
