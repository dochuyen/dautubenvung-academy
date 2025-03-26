import styled from "styled-components";

export const StyledCarousel = styled.div<any>`
  .react-multi-carousel-track {
    gap: 4px;
  }
  .react-multi-carousel-dot--active button {
    background: gray;
  }
  .react-multi-carousel-list {
    height: 300px;
  }
  .item-caroulsel {
    &:hover {
      transform: scale(1.05);
      width: 270px;
      height: 220px;
      box-shadow: none;
      border: 1px solid #b2bec3;
    }
    transition: transform 400ms, box-shadow 400ms;
    text-decoration: none;
    display: flex;
    width: 270px;
    height: 220px;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 3px;
    background: #f0f3fa;
    will-change: transform, box-shadow;
    .title {
      display: flex;
      align-items: center;
      gap: 24px;
      width: 100%;
      .text-title {
        color: #3594ef;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
      .body-first {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        gap: 10px;
        .item-first {
          color: ${(props) =>
            props.screen_mode === "dark" ? "#fff" : "#080808"};
          font-family: Roboto;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .price {
          font-size: 18px !important;
          font-weight: bold;
          color: #9b59b6 !important;
          text-align: center;
          width: 100%;
        }
      }
      .body-second {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        .item-second {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          .item {
            color: ${(props) =>
              props.screen_mode === "dark" ? "#fff" : "#080808"};
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .item-value {
            color: ${(props) =>
              props.screen_mode === "dark"
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(8, 8, 8, 0.5)"};
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
`;
