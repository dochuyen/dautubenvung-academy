import React, { useCallback, useEffect, useState } from "react";
import { StyledForgotPassWord } from "./styled";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
export const ForgotPassword = () => {
  const [api, contextHolder] = notification.useNotification();
  const nextLogin = useNavigate();
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [texCode, setTextCode] = useState(null);
  const [code, setCode] = useState("");
  const [errCode, setErrCode] = useState(false);
  const [errCodeInput, setErrCodeInput] = useState(false);
  const [passWordFirst, setPassWordFirst] = useState("");
  const [errPassFirst, setErrPassFirst] = useState(false);
  const [errPassSecond, setErrPassSecond] = useState(false);
  const [passWordSecond, setPassWordSecond] = useState("");
  const [errPassWordSecond, setErrPassWordSecond] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    if (code !== "" && code !== texCode) {
      setErrCode(true);
    } else {
      setErrCode(false);
    }
  }, [code]);
  useEffect(() => {
    if (passWordSecond !== "" && passWordSecond !== passWordFirst) {
      setErrPassWordSecond(true);
    } else {
      setErrPassWordSecond(false);
    }
  }, [passWordSecond]);
  const [isCooldown, setIsCooldown] = useState(false);

  const sendCode = () => {
    if (!validateEmail(email)) {
      setEmailError("Email không hợp lệ");
      return;
    }
    setEmailError("");
    if (email === "") {
      setErrEmail(true);
    } else {
      setErrEmail(false);

      axios
        .post(`${process.env.REACT_APP_PORT}/auth/forgot-password`, { email })
        .then((res) => {
          if (res.status === 200) {
            api.success({
              message: `Thông báo`,
              description:
                "Bạn hãy vui lòng kiểm tra thông báo email trong hòm thư rác/spam để nhận mã code!",
              placement: "topRight",
            });
            setTextCode(res.data.passcode);
          }
        })
        .catch((err) => {
          api.error({
            message: `Lỗi`,
            description: "Đã có lỗi xảy ra, vui lòng thử lại sau.",
            placement: "topRight",
          });
        });
    }
  };

  // Debounced function to reset the cooldown state
  const debouncedResetCooldown = useCallback(
    debounce(() => {
      setIsCooldown(false);
    }, 5000),
    []
  );

  const handleSendCode = () => {
    if (!isCooldown) {
      sendCode();
      setIsCooldown(true);
      debouncedResetCooldown();
    }
  };
  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleChangePass = () => {
    if (email === "") {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
    if (passWordFirst === "") {
      setErrPassFirst(true);
    } else {
      setErrPassFirst(false);
    }
    if (passWordSecond === "") {
      setErrPassSecond(true);
    } else {
      setErrPassSecond(false);
    }
    if (code === "") {
      setErrCodeInput(true);
    } else {
      setErrCodeInput(false);
    }
    if (
      email !== "" &&
      code !== "" &&
      passWordFirst !== "" &&
      passWordSecond !== ""
    ) {
      axios
        .post(`${process.env.REACT_APP_PORT}/change-password-email`, {
          email: email,
          password: passWordSecond,
        })
        .then((res) => {
          if (res.status === 200) {
            api.success({
              message: `Thông báo`,
              description: "Đổi mật khẩu thành công!",
              placement: "topRight",
            });
            nextLogin("/login");
          }
        })
        .catch((err) => {
          api.error({
            message: `Lỗi`,
            description: "Bạn phải nhập đầy đủ thông tin trên!",
            placement: "topRight",
          });
        });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn phải nhập đầy đủ thông tin.",
        placement: "topRight",
      });
    }
  };
  return (
    <StyledForgotPassWord>
      {contextHolder}

      <div className="form-input">
        <div className="top">
          Nhập email <span style={{ color: "red" }}>*</span>
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bottom"
          type="text"
        />
        {errEmail ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            Email không được để trống!
          </p>
        ) : emailError ? (
          <p style={{ fontSize: "12px", color: "red" }}>{emailError}</p>
        ) : (
          <></>
        )}
        <button onClick={handleSendCode} className="btn-sendcode">
          Gửi mã
        </button>
      </div>
      <div className="form-input">
        <div className="top">
          Nhập code <span style={{ color: "red" }}>*</span>
        </div>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bottom"
          type="text"
        />
        {errCode ? (
          <p style={{ fontSize: "12px", color: "red" }}>Mã code không đúng</p>
        ) : errCodeInput ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            Mã code không được để trống!
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="form-input">
        <div className="top">
          Nhập mật khẩu mới <span style={{ color: "red" }}>*</span>
        </div>
        <div style={{ position: "relative" }}>
          <input
            className="bottom"
            value={passWordFirst}
            onChange={(e) => setPassWordFirst(e.target.value)}
            type={showPass2 ? "text" : "password"}
          />
          <div
            onClick={() => setShowPass2(!showPass2)}
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            {showPass2 ? <IoMdEye /> : <IoIosEyeOff />}
          </div>
        </div>
        {errPassFirst ? (
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
            className="bottom"
            value={passWordSecond}
            onChange={(e) => setPassWordSecond(e.target.value)}
            type={showPass ? "text" : "password"}
          />
          <div
            onClick={() => setShowPass(!showPass)}
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            {showPass ? <IoMdEye /> : <IoIosEyeOff />}
          </div>
        </div>
        {errPassWordSecond ? (
          <p>Mật khẩu không trùng khớp</p>
        ) : errPassSecond ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            Mật khẩu nhập lại không được để trống!
          </p>
        ) : (
          <></>
        )}
      </div>
      <button
        disabled={
          errPassWordSecond && errCode && code === "" && passWordFirst === ""
        }
        onClick={handleChangePass}
        className="btnforgot"
      >
        Đổi mật khẩu
      </button>
    </StyledForgotPassWord>
  );
};
