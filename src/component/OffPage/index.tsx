import React from "react";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Mycourse } from "./MyCourse/Mycourse";
import { StyledOffPage } from "./styled";
export const User = () => {
  const token = localStorage.getItem("token");
  return (
    <StyledOffPage>
      <div className="box-in-up">
        {token ? (
          <Mycourse />
        ) : (
          <>
            <Login />
            <SignUp />
          </>
        )}
      </div>
    </StyledOffPage>
  );
};
