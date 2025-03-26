// @ts-ignore
import React, { useEffect, useState } from "react";
import { StyledGroupDetail } from "./styled";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectAppSelector } from "../../redux/app/selector";
import debounce from "lodash/debounce";
import { notification } from "antd";
import { setProduct } from "../../redux/app";
import { Element, scroller } from "react-scroll";

export const GroupDetail = () => {
  const user = useSelector(selectAppSelector, shallowEqual);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const [course, setCourse] = useState<any>(null);
  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  const getDetailCourse = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/groups/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCourse(res.data[0]));
  };
  useEffect(() => {
    getDetailCourse();
  }, [id]);
  const handleCartCourse = debounce(
    () => {
      if (userID) {
        axios
          .post(
            `${process.env.REACT_APP_PORT}/course-cart`,
            {
              user_id: userID,
              course_id: id,
              quantity: 1,
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
            api.success({
              message: `Thành công`,
              description: "Đã thêm vào giỏ hàng!",
              placement: "topRight",
            });
          })
          .catch((err) => {
            api.error({
              message: `Lỗi`,
              description: "Bạn phải đăng nhập để thêm vào giỏ hàng!",
              placement: "topRight",
            });
          });
      } else {
        api.error({
          message: `Lỗi`,
          description: "Bạn phải đăng nhập để thêm vào giỏ hàng!",
          placement: "topRight",
        });
      }
    },
    3000,
    { leading: true, trailing: false }
  );
  const handleBuy = (item: any) => {
    navigate("/check-out", { state: { item } });
  };
  const handleScrollTo = (target: any) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  return (
    <StyledGroupDetail>
      {contextHolder}

      <div className="box-first">
        <div className="info-product">
          <div className="img">
            <img className="img-detail" src={course?.image} alt="" />
          </div>
        </div>
        <div className="technical-information">
          <h1 className="title-product">{course?.title}</h1>
          <div className="text">{course?.demo}</div>\
          {id === "26" ? (
            <div className="price">
              {course?.price
                ?.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                .replace(/,/g, ".")}{" "}
              VND
            </div>
          ) : (
            <></>
          )}
          {id === "26" ? (
            <button
              onClick={() => handleBuy(course)}
              className="btn-add-shopping-cart"
            >
              <MdAddShoppingCart />{" "}
              <span style={{ marginTop: "3px" }}>ĐĂNG KÝ TƯ VẤN ĐẦU TƯ</span>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="describe">
        <div className="describe-first">
          <img src="" alt="" />
        </div>
        <div className="describe-second">
          <div className="box1">
            <div className="title-des">
              {id == 26
                ? "Tư vấn đầu tư & quản lý tài sản:"
                : "Cộng đồng Đầu Tư Bền Vững"}
            </div>
            <div className="des">
              <blockquote
                dangerouslySetInnerHTML={{
                  __html: course?.description.replace(/\n/g, "<br/>"),
                }}
              />
              {id === "26" ? (
                <div className="box-submit">
                  <button
                    onClick={() => handleBuy(course)}
                    className="btn-add-shopping-cart-des"
                  >
                    <span style={{ marginTop: "3px" }}>
                      ĐĂNG KÝ TƯ VẤN ĐẦU TƯ
                    </span>
                  </button>
                </div>
              ) : (
                <div className="box-submit">
                  <button
                    onClick={() => handleScrollTo("courses")}
                    className="btn-add-shopping-cart-des"
                  >
                    <span style={{ marginTop: "3px" }}>
                      Đăng ký khóa học để tham gia cộng đồng
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="box2"></div>
        </div>
        <div className="describe-third"></div>
      </div>
    </StyledGroupDetail>
  );
};
