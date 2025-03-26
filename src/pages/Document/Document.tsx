import React, { useCallback, useState } from "react";
import { StyleDocument } from "./styles";
import { Element, Link as Scroll, scroller } from "react-scroll";
import axios from "axios";
import { notification } from "antd";
import anhVinh from "../../assets/anhvinh.png";
import { debounce } from "lodash";
export const Document = () => {
  const [name, setName] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errFullName, setErrorFullName] = useState(false);
  const token = localStorage.getItem("token");
  const [isCooldown, setIsCooldown] = useState(false);

  const validateEmail = (email: any) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleScrollTo = (target: any) => {
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Adjust the delay as needed to ensure routing is complete before scrolling
  };
  const postEmail = () => {
    if (email === "") {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
    if (name === "") {
      setErrorFullName(true);
    } else {
      setErrorFullName(false);
    }
    if (name === "" || email === "") {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn vui lòng nhập đầy đủ thông tin",
        placement: "topRight",
      });
      return;
    }
    if (name !== "" && email !== "") {
      axios
        .post(
          `${process.env.REACT_APP_PORT}/send-document`,
          {
            email: email,
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
              message: `Thành công`,
              description:
                "Bạn đã đăng ký nhận tài liệu đầu tư miễn phí. Vui lòng vào gmail để xác nhận.",
              placement: "topRight",
            });
          } else {
            api.error({
              message: `Thất bại`,
              description:
                "Đăng ký nhận tài liệu thất bại, vui lòng nhập email hợp lệ",
              placement: "topRight",
            });
          }
        })
        .catch((err) => {
          api.error({
            message: `Thất bại`,
            description:
              "Đăng ký nhận tài liệu thất bại, vui lòng nhập email hợp lệ",
            placement: "topRight",
          });
        });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn vui lòng nhập đầy đủ thông tin",
        placement: "topRight",
      });
    }
  };
  const debouncedResetCooldown = useCallback(
    debounce(() => {
      setIsCooldown(false);
    }, 3000),
    []
  );

  // const sendEmail = () => {
  //   if (!isCooldown) {
  //     postEmail();
  //     setIsCooldown(true);
  //     debouncedResetCooldown();
  //   }
  // };

  const sendEmail = () => {
    // Kiểm tra email trống
    if (email === "") {
      setErrEmail(true);
      api.warning({
        message: `Cảnh báo`,
        description: "Email không được để trống",
        placement: "topRight",
      });
      return;
    } else {
      setErrEmail(false);
    }

    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
      setErrEmail(true);
      api.warning({
        message: `Cảnh báo`,
        description: "Địa chỉ email không hợp lệ",
        placement: "topRight",
      });
      return;
    } else {
      setErrEmail(false);
    }

    // Kiểm tra họ tên trống
    if (name === "") {
      setErrorFullName(true);
      api.warning({
        message: `Cảnh báo`,
        description: "Họ và tên không được để trống",
        placement: "topRight",
      });
      return;
    } else {
      setErrorFullName(false);
    }

    // Nếu tất cả thông tin đầy đủ và hợp lệ
    if (!isCooldown) {
      postEmail();
      setIsCooldown(true);
      debouncedResetCooldown();
    }
  };

  return (
    <StyleDocument>
      {contextHolder}
      <div className="box-first-document">
        <div className="info-ebook">
          <div className="title-ebook">
            BỘ TÀI LIỆU: "NGHỀ ĐẦU TƯ"
            <p className="des">
              Xin chào bạn mình là Vinh của ĐẦU TƯ BỀN VỮNG đây.
            </p>
            <p style={{ fontSize: "15px", fontWeight: 400 }}>
              Nhiều năm qua mình thường chia sẻ rất nhiều những kinh nghiệm đầu
              tư, kinh nghiệm kinh doanh của mình trên kênh Youtube Hoàng Vinh
              Đầu Tư Bền Vững.
            </p>
          </div>

          <div className="box-btn-first">
            <button
              onClick={() => handleScrollTo("form")}
              className="btn-click"
            >
              Tải tài liệu tại ĐÂY ...
              <br />
              <span style={{ fontSize: "15px" }}>Hoàn toàn miễn phí!</span>
            </button>
          </div>
        </div>
        <img style={{ width: 300 }} src={anhVinh} alt="" />
      </div>
      <div className="content-ebook">
        <p
          style={{ lineHeight: 1.5 }}
          className="ladi-headline ladi-transition"
        >
          Mình rất vui vì bạn đã quyết định bỏ thời gian quý giá của bạn để đăng
          ký nhận bộ tài liệu đầu tư này. Mình trân trọng điều đó và trước hết
          mình muốn gửi lời cảm ơn trân thành tới bạn.
          <br />
          <br />
          Đây là bộ tài liệu có tên gọi là "NGHỀ ĐẦU TƯ" được viết bởi một người
          trước đây từng trải qua nhiều thất bại, phá sản, từng ngậm đắng nuốt
          cay và lận đận nhiều phen vì hai chữ "làm giàu".
          <br />
          <br />
          Vì vậy nó sẽ không có những triết lý cao siêu như những cuốn sách của
          bậc vĩ nhân. Cũng chẳng có những lý thuyết nặng nề, khó áp dụng trong
          thực tiễn. Bởi lẽ những nội dung trong cuốn tài liệu được viết từ
          chính những kinh nghiệm xương máu và sự chiêm nghiệm của mình trong
          việc đầu tư ở các thị trường như: bất động sản, cổ phiếu, vàng. Nó sẽ
          mang đến cho bạn nhiều kiến thức bổ ích, thực tế và có ý nghĩa thực sự
          trong công việc đầu tư của bạn.
          <br />
        </p>
        <div className="ladi-paragraph ladi-transition">
          Là một người cầu tiến mình rất thích đọc sách, gặp gỡ rất nhiều người
          thành công từ hai bàn tay trắng. Nghe những câu chuyện của họ, bản
          thân mình cũng học hỏi được rất nhiều điều.
          <br />
          <br />
          Trong suốt thời gian gần 10 năm gắn bó với công việc đầu tư mình đã
          từng đánh đổi những sai lầm bằng rất nhiều tiền, bằng mồ hôi nước mắt,
          để nhận ra nhiều thứ.
          <br />
          <br />
          Giờ đây, mình gom lại một số những kinh nghiệm, bài học trong nhiều
          năm đầu tư đó, rút ngắn lại thành một số những lưu ý, những công thức
          quan trọng áp dụng trong đầu tư để gửi gắm vào bộ tài liệu này.
          <br />
          <br />
          Mình mong rằng bạn sẽ nhận được một điều gì đó hữu ích để áp dụng
          trong quản lý tài chính và công việc đầu tư của mình.
          <br />
          <br />
        </div>
      </div>

      <div className="my-info">
        <div className="title">CHÚC BẠN ĐẦU TƯ THẮNG LỢI</div>
        <div className="me">
          <img
            style={{
              borderRadius: "999999999px",
              width: "250px",
              height: "250px",
              // marginLeft: "80px",
            }}
            className="img-avt"
            src={anhVinh}
            alt=""
          />
          <div className="box-mxh">
            <a
              target="_plank"
              href="https://www.youtube.com/@hoangvinhdautubenvung"
              id="GROUP102"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE82" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/youtube.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/youtube.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE87" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">85.000+</h2>
                </div>
                <div id="PARAGRAPH88" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_plank"
              href="https://www.facebook.com/hoangvinhdautu"
              id="GROUP103"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE80" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/facebook.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/facebook.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE91" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">68.000+</h2>
                </div>
                <div id="PARAGRAPH100" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_plank"
              href="https://www.tiktok.com/@hoangvinhdautu"
              id="GROUP101"
              className="ladi-element"
            >
              <div className="ladi-group">
                <div id="SHAPE83" className="ladi-element">
                  <div className="ladi-shape ladi-transition">
                    <div className="icon-mobile">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/tiktok.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                    <div className="icon-desktop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                        className=""
                        fill="#000"
                      >
                        <image
                          href="https://w.ladicdn.com/ladiui/icons/social/tiktok.svg"
                          height="32"
                          width="32"
                        ></image>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE84" className="ladi-element">
                  <h2 className="ladi-headline ladi-transition">70.000+</h2>
                </div>
                <div id="PARAGRAPH85" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    Người theo dõi
                    <br />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="box-btn-second">
        <button onClick={() => handleScrollTo("form")} className="btn-click">
          Tải tài liệu tại ĐÂY ...
          <br />
          <span style={{ fontSize: "15px" }}>Hoàn toàn miễn phí!</span>
        </button>
      </div>
      <Element name="form">
        <div className="box-input">
          <div className="form-checkout">
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
                Địa chỉ email <span style={{ color: "red" }}>*</span>{" "}
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
            <div className="box-btn-mail">
              <button onClick={sendEmail} className="btn-order">
                GỬI ĐỂ NHẬN TÀI LIỆU ĐẦU TƯ
              </button>
            </div>
          </div>
        </div>
      </Element>
    </StyleDocument>
  );
};
