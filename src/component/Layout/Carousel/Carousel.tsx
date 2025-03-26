/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import { StyledCarousel } from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
interface CarouselInterface {
  listCourse: any;
}
export const CarouselHome = ({ listCourse }: CarouselInterface) => {
  return (
    <StyledCarousel>
      {" "}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
          },
          desktop: {
            breakpoint: {
              max: 1200,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 20,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 726,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 726,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {listCourse?.map((item: any, index: any) => (
          <Link
            to={`/product-detail/${item?.course_id}`}
            className="item-caroulsel"
          >
            <div className="title">
              <img
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "3px",
                  objectFit: "cover",
                }}
                src={item?.image}
                alt=""
              />
            </div>
            <div className="body">
              <div className="body-first">
                <div className="item-first">
                  {/* <Tooltip title={item?.title}> */}
                  <div style={{ color: "black", height: "34px" }}>
                    {item?.title?.length > 65
                      ? `${item?.title?.slice(0, 65)}...`
                      : item?.title}
                  </div>
                  {/* </Tooltip> */}
                </div>
                <div className="price">
                  {item.price.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  ₫
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </StyledCarousel>
  );
};
