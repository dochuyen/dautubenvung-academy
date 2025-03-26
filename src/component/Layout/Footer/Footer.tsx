import React, { useEffect, useState } from "react";
import { StyleFooter } from "./styled";
import iconFacebook from "../../../assets/Facebook.png";
import iconZalo from "../../../assets/zalo.png";
import { Flex, Modal } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-footer.png";
import { FaFacebookSquare, FaTiktok, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyleFooter>
      <Flex
        style={{
          flexDirection: "column",
          // minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            flex: 1,
            // background: "#F4F4F4",
          }}
        >
          <div className="absolute-footer">
            <div className="container">
              <div className="footer-first">
                <Link to="/" className="icon">
                  <img
                    style={{
                      width: "187px",
                      // height: "76px",
                      marginBottom: "5px",
                    }}
                    src={logo}
                    alt=""
                  />
                </Link>
                <div className="text">
                  Số 36 LK6A, Làng Việt Kiều Châu Âu, Mỗ Lao, Hà Đông, Hà Nội
                </div>
              </div>
              {/* <div className="footer-second">
                <div className="footer-secondary">
                  <div className="footer-text ">Trang chủ</div>
                  <div className="footer-text ">Khoá học</div>
                  <div className="footer-text ">Sách</div>
                </div>
              </div> */}
              <div className="info-company">
                <div className="box-icon">
                  <a
                    target="_plank"
                    href="https://www.facebook.com/hoangvinhdautu"
                    style={{ color: "#3D5A98" }}
                    className="icon"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    target="_plank"
                    href="https://www.youtube.com/@hoangvinhdautubenvung"
                    style={{ color: "red" }}
                    className="icon"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    target="_plank"
                    href="https://www.tiktok.com/@hoangvinhdautu"
                    style={{ color: "black" }}
                    className="icon"
                  >
                    <FaTiktok />
                  </a>
                </div>
                <div className="hotline">Hotline/Zalo: 0395.888.619</div>
              </div>
              {/* <div className="footer-primary">
            <div className="copyright-footer">
              <h4>dautubenvungacademy.vn</h4>
              <p>Copyright © 2024 - Chuyên mua bán khóa học giá rẻ</p>
            </div>
          </div> */}
            </div>
          </div>
          <div className="contact">
            <a href="https://www.facebook.com/hoangvinhdautu" target="_plank">
              <img
                className="icon-rot"
                style={{
                  background: "#5196E4",
                  borderRadius: "10000000000px",
                  height: "40px",
                  width: "40px",
                }}
                src={iconFacebook}
                alt=""
              />
            </a>
            <a
              href="https://zalo.me/0395888619"
              target="_plank"
              style={{
                background: "#5196E4",
                borderRadius: "10000000000px",
                height: "40px",
                width: "40px",
              }}
              className="icon-rot"
            >
              <img
                style={{
                  background: "#5196E4",
                  borderRadius: "10000000000px",
                  height: "40px",
                  width: "40px",
                }}
                src={iconZalo}
                alt=""
              />
            </a>
          </div>
        </div>
      </Flex>
    </StyleFooter>
  );
};
