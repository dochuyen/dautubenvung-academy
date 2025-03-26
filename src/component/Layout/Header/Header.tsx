import React, { useEffect, useRef, useState } from "react";
import { StyledHeader } from "./styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import logo from "../../../assets/logodautuden.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setNumberCart } from "../../../redux/app";
import { selectNumberCart } from "../../../redux/app/selector";
import { AiFillHome } from "react-icons/ai";
import { Element, Link as Scroll, scroller } from "react-scroll";
import { Tooltip } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openShowMobile, setOpenShowMobile] = useState(false);
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const [openOption, setOpenOption] = useState(false);
  const optionRef = useRef<any>(null); // Ref cho phần tử popup
  const mobileMenuRef = useRef<any>(null); // Ref cho menu di động

  const info = localStorage.getItem("info");
  const token = localStorage.getItem("token");
  // Thêm event listener khi component mount
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setOpenOption(false); // Đóng popup người dùng nếu click bên ngoài
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpenShowMobile(false); // Đóng menu di động nếu click bên ngoài
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionRef, mobileMenuRef]); // Chỉ chạy lại khi ref thay đổi
  const handleScrollTo = (target: any) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };

  let listCart = [...listCourseCart, ...listBookCart];
  const totalCart = listCart.reduce((total, item) => total + item.quantity, 0);

  dispatch(setNumberCart(totalCart));
  const numberCart = useSelector(selectNumberCart);

  return (
    <StyledHeader>
      <Element name="header">
        <div className="header-main">
          <div className="flex-row">
            <div
              onClick={() => setOpenShowMobile(!openShowMobile)}
              className="icon-mobile"
            >
              <RxHamburgerMenu />
              {openShowMobile ? (
                <div ref={mobileMenuRef} className="box-mobile">
                  <Link
                    onClick={() => setOpenShowMobile(!openShowMobile)}
                    to="/"
                    className="tab"
                  >
                    TRANG CHỦ
                  </Link>
                  <div
                    onClick={() => {
                      setOpenShowMobile(!openShowMobile);
                      handleScrollTo("courses");
                    }}
                    className="tab"
                    style={{ cursor: "pointer" }}
                  >
                    KHOÁ HỌC
                  </div>

                  <Link
                    onClick={() => setOpenShowMobile(!openShowMobile)}
                    to="/document"
                    className="tab"
                  >
                    TÀI LIỆU
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
            <Link to="/" className="icon">
              <img
                style={{ width: "180px", height: "56px", marginBottom: "7px" }}
                src={logo}
                alt=""
              />
            </Link>
            <div className="second-header">
              <Link to="/" className="tab">
                TRANG CHỦ
              </Link>
              <div
                onClick={() => handleScrollTo("courses")}
                className="tab"
                style={{ cursor: "pointer" }}
              >
                KHOÁ HỌC
              </div>
              {/* <div
              onClick={() => handleScrollTo("book")}
              className="tab"
              style={{ cursor: "pointer" }}
            >
              SÁCH
            </div> */}
              <Link
                style={{ visibility: "visible" }}
                to="/document"
                className="tab"
              >
                TÀI LIỆU
              </Link>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              {!token ? (
                <Link to="/login" className="icon-user">
                  <FaRegUser style={{ color: "#fff" }} />
                </Link>
              ) : (
                <div
                  style={{
                    position: "relative",
                    // background: "#56D699",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#fff",
                    cursor: "pointer",
                    zIndex: 30,
                  }}
                  onClick={() => setOpenOption(!openOption)}
                >
                  {info} <IoMdArrowDropdown />
                  {openOption && (
                    <div
                      ref={optionRef} // Tham chiếu ref tới popup
                      style={{
                        position: "absolute",
                        top: "31px",
                        background: "#fff",
                        borderRadius: "8px",
                        border: "1px solid #333",
                      }}
                    >
                      <Link
                        to="/login"
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid #333",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          width: "120px",
                          color: "#2362e0",
                        }}
                      >
                        Khoá học của tôi
                      </Link>
                      <Link
                        to="/change-pass"
                        style={{
                          padding: "8px",

                          borderBottom: "1px solid #333",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          width: "120px",
                          color: "#2362e0",
                        }}
                      >
                        Đổi mật khẩu
                      </Link>
                      <div
                        onClick={() => {
                          localStorage.removeItem("userID");
                          localStorage.removeItem("token");
                          localStorage.removeItem("info");
                          setOpenOption(false);
                          navigate("/");

                          window.location.reload();
                        }}
                        style={{
                          padding: "8px",

                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          width: "120px",
                          color: "#2362e0",
                        }}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Element>
    </StyledHeader>
  );
};
