import React, { useEffect, useState } from "react";
import { StyleChangePass } from "./styled";
import axios from "axios";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

export const ChangePass = () => {
  const [api, contextHolder] = notification.useNotification();
  const next = useNavigate();
  const [checkChange, setCheckChange] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassNew1, setShowPassNew1] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errOldPass, setErrOldPass] = useState(false);
  const [errFirstPass, setErrFirstPass] = useState(false);
  const [errSecondPass, setErrSecondPass] = useState(false);
  const [check, setCheck] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWord1, setPassWord1] = useState("");
  const submitChange = () => {
    if (phone === "") {
      setErrPhone(true);
    } else {
      setErrPhone(false);
    }
    if (oldPass === "") {
      setErrOldPass(true);
    } else {
      setErrOldPass(false);
    }
    if (passWord1 === "") {
      setErrSecondPass(true);
    } else {
      setErrSecondPass(false);
    }
    if (passWord === "") {
      setErrFirstPass(true);
    } else {
      setErrFirstPass(false);
    }
    if (phone !== "" && oldPass !== "" && passWord1 !== "" && passWord !== "") {
      axios
        .post(
          `${process.env.REACT_APP_PORT}/change-password`,
          {
            phone: phone,
            old_password: oldPass,
            new_password: passWord,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Custom-Header": "foobar",
              // Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            api.success({
              message: `Notification success`,
              description: "Đổi mật khẩu thành công!",
              placement: "topRight",
            });
            setCheckChange(true);
          }
        })
        .catch((err) => {
          console.log("err.response.status: ", err.response.status);
          if (err.response.status === 403) {
            api.error({
              message: `Lỗi`,
              description: "Mật khẩu cũ không đúng!",
              placement: "topRight",
            });
          } else if (err.response.status === 404) {
            api.error({
              message: `Lỗi`,
              description: "Đổi mật khẩu thất bại!",
              placement: "topRight",
            });
          }
        });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn phải nhập đầy đủ thông tin!",
        placement: "topRight",
      });
    }
  };
  useEffect(() => {
    if (passWord === passWord1) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [passWord, passWord1]);
  return (
    <StyleChangePass>
      {contextHolder}
      {checkChange ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
          className="box-qr"
        >
          <div className="titleqr">
            Bạn đã đổi mật khẩu thành công !<br />{" "}
            <span style={{ fontSize: "23px" }}></span>
          </div>
          <Link style={{ color: "#fff" }} to="/" className="link-login">
            CLICK VÀO ĐÂY ĐỂ TỚI TRANG CHỦ
          </Link>
        </div>
      ) : (
        <div className="box-input">
          <div className="form-checkout">
            <div className="form-input">
              <div className="top">
                Số điện thoại <span style={{ color: "red" }}>*</span>
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bottom"
                type="text"
              />
              {errPhone ? (
                <p style={{ fontSize: "12px", color: "red" }}>
                  Số điện thoại không được để trống!
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="form-input">
              <div className="top">
                Mật khẩu cũ <span style={{ color: "red" }}>*</span>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  value={oldPass}
                  onChange={(e) => setOldPass(e.target.value)}
                  type={showPass ? "text" : "password"}
                  className="bottom"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 20, top: 11 }}
                >
                  {showPass ? <IoMdEye /> : <IoIosEyeOff />}
                </div>
              </div>
              {errOldPass ? (
                <p style={{ fontSize: "12px", color: "red" }}>
                  Mật khẩu cũ không được để trống!
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="form-input">
              <div className="top">
                Mật khẩu mới <span style={{ color: "red" }}>*</span>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  value={passWord1}
                  onChange={(e) => setPassWord1(e.target.value)}
                  type={showPassNew1 ? "text" : "password"}
                  className="bottom"
                />
                <div
                  onClick={() => setShowPassNew1(!showPassNew1)}
                  style={{ position: "absolute", right: 20, top: 11 }}
                >
                  {showPassNew1 ? <IoMdEye /> : <IoIosEyeOff />}
                </div>
              </div>
              {errSecondPass ? (
                <p style={{ fontSize: "12px", color: "red" }}>
                  Mật khẩu mới không được để trống!
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="form-input">
              <div className="top">
                Nhập lại mật khẩu mới <span style={{ color: "red" }}>*</span>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  value={passWord}
                  onChange={(e) => setPassWord(e.target.value)}
                  type={showPassNew ? "text" : "password"}
                  className="bottom"
                />
                <div
                  onClick={() => setShowPassNew(!showPassNew)}
                  style={{ position: "absolute", right: 20, top: 11 }}
                >
                  {showPassNew ? <IoMdEye /> : <IoIosEyeOff />}
                </div>
              </div>
              {errFirstPass ? (
                <p style={{ fontSize: "12px", color: "red" }}>
                  Mật khẩu không được để trống!
                </p>
              ) : check ? (
                <p style={{ fontSize: "12px", color: "red" }}>
                  Mật khẩu không trùng khớp!
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="box-btn-mail">
              <button onClick={submitChange} className="btn-order">
                ĐỔI MẬT KHẨU
              </button>
            </div>
            <Link
              style={{ marginTop: "20px", fontSize: "15px" }}
              to="/forgot-password"
              className="forgot-password"
            >
              Quên mật khẩu ?
            </Link>
          </div>
        </div>
      )}
    </StyleChangePass>
  );
};
