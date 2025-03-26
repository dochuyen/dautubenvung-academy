import React, { useEffect } from "react";
import { Layout } from "./component/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./component/OffPage/Login/Login";
import { User } from "./component/OffPage";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import io from "socket.io-client";

import { Checkout } from "./pages/Checkout/Checkout";
import { CheckoutQR } from "./pages/CheckoutQR/CheckoutQR";
import { Member } from "./pages/Member/Member";
import { ListCourse } from "./pages/ListCourse/ListCourse";
import path from "path";
import { BookDetail } from "./pages/BookDetail/BookDetail";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { GroupDetail } from "./pages/GroupDetail/GroupDetail";
import { Document } from "./pages/Document/Document";
import { ChangePass } from "./pages/ChangePass/ChangePass";
import { TableVideo } from "./pages/Table/Table";
import { VideoGlobal } from "./pages/Videos";
function App() {
  const publics = [
    {
      path: "/",
      pages: Home,
    },
    {
      path: "/change-pass",
      pages: ChangePass,
    },
    {
      path: "/login",
      pages: User,
    },
    {
      path: "/document",
      pages: Document,
    },
    {
      path: "/product-detail/:id",
      pages: ProductDetail,
    },

    {
      path: "/check-out",
      pages: Checkout,
    },
    {
      path: "/check-outqr",
      pages: CheckoutQR,
    },
    {
      path: "/member",
      pages: Member,
    },
    {
      path: "/list-course",
      pages: ListCourse,
    },
    {
      path: "/book-detail/:id",
      pages: BookDetail,
    },
    {
      path: "/group-detail/:id",
      pages: GroupDetail,
    },
    {
      path: "/forgot-password",
      pages: ForgotPassword,
    },
    {
      path: "/course/:courseId",
      pages: TableVideo,
    },
    {
      path: "/video/:courseId/:videoId",
      pages: VideoGlobal,
    },
  ];

  return (
    <Router>
      <Routes>
        {publics.map((pub, index) => {
          const Pages = pub.pages;
          return (
            <Route
              key={index}
              path={pub.path}
              element={
                <>
                  <Layout>
                    <Pages />
                  </Layout>
                </>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
