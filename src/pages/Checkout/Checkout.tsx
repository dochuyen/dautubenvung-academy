import React, { useEffect, useState } from "react";
import { StyleCheckout } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { selectProduct } from "../../redux/app/selector";
export const Checkout = () => {
  const nextHome = useNavigate();
  const userID = localStorage.getItem("userID");
  const [api, contextHolder] = notification.useNotification();
  const { state } = useLocation();
  const { item } = state;

  const [name, setName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");

  const [city, setCity] = useState("");

  const [district, setDistrict] = useState("");

  const [address, setAddress] = useState("");
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errFullName, setErrorFullName] = useState(false);
  const [errCity, setErrorCity] = useState(false);
  const [errDistrict, setErrorDistrict] = useState(false);
  const [errAddress, setErrorAddress] = useState(false);

  const getCourseCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/course-cart/1`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/book-cart/1`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setListBookCart(res.data));
  };
  useEffect(() => {
    getCourseCart();
    getBookCart();
  }, []);

  let listCart = [...listCourseCart, ...listBookCart];
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = () => {
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
    if (name === "") {
      setErrorFullName(true);
    } else {
      setErrorFullName(false);
    }
    if (email === "" || name === "" || phoneNumber === "") {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn vui lòng nhập đầy đủ thông tin",
        placement: "topRight",
      });
      return;
    }
    if (email !== "" && name !== "" && phoneNumber !== "") {
      nextHome("/check-outqr", {
        state: {
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          district: district,
          email: email,
          city: city,
          item,
        },
      });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn vui lòng nhập đầy đủ thông tin",
        placement: "topRight",
      });
    }
  };
  interface Item {
    title: string;
  }

  return (
    <StyleCheckout>
      {contextHolder}
      <div className="title">
        {item.hasOwnProperty("book_id")
          ? "ĐẶT HÀNG"
          : item.hasOwnProperty("course_id")
          ? "ĐĂNG KÝ KHOÁ HỌC"
          : "ĐĂNG KÝ TƯ VẤN ĐẦU TƯ"}
      </div>
      <div className="box-first">
        {/* <div className="returning">
          <div>Returning customer?</div>
          <Link className="login" to="/login">
            Click here to login
          </Link>
        </div> */}
        <div className="form-checkout">
          <h3 className="title-form">
            Bạn vui lòng nhập đầy đủ thông tin bên ở dưới nhé!
          </h3>
          <div className="form-input">
            <div className="top">
              Họ và tên <span style={{ color: "red" }}>*</span>{" "}
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bottom"
              type="text"
            />
            {errFullName ? (
              <p style={{ marginTop: "5px", color: "red", fontSize: "12px" }}>
                Họ và tên không được để trống
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="form-input">
            <div className="top">
              Số điện thoại <span style={{ color: "red" }}>*</span>{" "}
            </div>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bottom"
              type="text"
            />
            {errPhoneNumber ? (
              <p style={{ marginTop: "5px", color: "red", fontSize: "12px" }}>
                Số điện thoại không được để trống
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="form-input">
            <div className="top">
              Địa chỉ email
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bottom"
              type="text"
            />

            {errEmail ? (
              <p style={{ marginTop: "5px", color: "red", fontSize: "12px" }}>
                Email không được để trống
              </p>
            ) : (
              <></>
            )}
          </div>
          {item?.hasOwnProperty("book_id") ? (
            <div>
              <div className="form-input">
                <div className="top">
                  Tỉnh/Thành phố <span style={{ color: "red" }}>*</span>{" "}
                </div>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bottom"
                  type="text"
                />
              </div>
              <div className="form-input">
                <div className="top">
                  Quận/Huyện <span style={{ color: "red" }}>*</span>{" "}
                </div>
                <input
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="bottom"
                  type="text"
                />
              </div>
              <div className="form-input">
                <div className="top">
                  Địa chỉ nhà (Số nhà/Tên Toà...){" "}
                  <span style={{ color: "red" }}>*</span>{" "}
                </div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Địa chỉ"
                  className="bottom"
                  type="text"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="box-second">
        <div className="product-buy">
          {/* <div className="title">Sản phẩm đặt mua</div> */}
          <div className="shop_table">
            <div className="header-table">
              <th style={{ color: "#ffff" }} className="product-name">
                {item.hasOwnProperty("book_id")
                  ? "Tên sách:"
                  : item.hasOwnProperty("course_id")
                  ? "Tên khoá học:"
                  : "Tên chương trình:"}
              </th>
              <th
                style={{ color: "#ffff", fontSize: "12px" }}
                className="product-total"
              >
                {item ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(/\(/g, "<br> ("),
                    }}
                  />
                ) : (
                  "Product not available"
                )}
              </th>
            </div>

            <tr className="cart_item">
              <td
                style={{ color: "#ffff", fontWeight: 600 }}
                className="product-name"
              >
                Giá:
              </td>
              <td className="product-total">
                <span className="woocommerce-Price-amount amount">
                  <bdi style={{ color: "#ffff" }}>
                    {item
                      ? (item.price * 1).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                      : "0"}
                    &nbsp;
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>{" "}
              </td>
            </tr>

            <tr className="order-total">
              <th style={{ color: "#ffff" }}>Tổng thanh toán:</th>
              <td>
                <strong>
                  <span className="woocommerce-Price-amount amount">
                    <bdi style={{ color: "#ffff" }}>
                      {item
                        ? (item.price * 1).toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })
                        : "0"}
                      &nbsp;
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>
                </strong>{" "}
              </td>
            </tr>
          </div>
          <button onClick={handleSubmit} className="btn-order">
            THANH TOÁN
          </button>
        </div>

        <div className="payment">
          <div className="payment_box payment_method_casso_up_vietinbank">
            <p>
              {item.hasOwnProperty("book_id")
                ? "Sau khi thanh toán hệ thống sẽ tự động kích hoạt chương trình khoá học của bạn"
                : item.hasOwnProperty("course_id")
                ? "Sau khi thanh toán hệ thống sẽ tự động kích hoạt chương trình khoá học của bạn"
                : "Sau khi thanh toán Đầu Tư Bền Vững sẽ liên hệ với bạn để sắp xếp lịch tư vấn trong thời gian sớm nhất"}
            </p>
          </div>
        </div>
      </div>
    </StyleCheckout>
  );
};
