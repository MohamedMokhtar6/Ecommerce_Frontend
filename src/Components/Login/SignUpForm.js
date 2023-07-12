import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function SignUpPage() {
  return (
    <div className="loginPage">
      <Container className="h-100 d-flex  justify-content-center align-items-center">
        <div className=" login fit  d-flex flex-column align-items-center">
          <div className="my-3 text-center">
            <h3 className="loginText">Create an account</h3>
            <h6 className="loginText">
              Already have an account ?
              <Link to="/login" className="text-main ms-1">
                Sign In
              </Link>
            </h6>
          </div>
          <div className="divInput">
            <input
              type="email"
              placeholder="Your Email"
              className="logInInput my-2"
              // value={email}
              // onChange={handleChangeEmail}
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input
              type="password"
              placeholder="Password"
              className="logInInput pass my-2"
              // value={password}
              // onChange={handleChangePassword}
            />
            <i
              className="fa-solid fa-eye click"
              onClick={(e) => {
                e.target.classList.toggle("fa-eye-slash");
                let pass = document.querySelector(".pass");
                pass.type = "text";
                if (!e.target.classList.contains("fa-eye-slash")) {
                  pass.type = "password";
                }
              }}
            ></i>
          </div>
          <div className="divInput">
            <input
              type="text"
              className="logInInput"
              placeholder="First Name"
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input type="text" className="logInInput" placeholder="Last Name" />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input type="text" className="logInInput" placeholder="User Name" />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input
              type="text"
              className="logInInput"
              placeholder="phone Number"
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <button className="p-1 mt-4 loginBtn">LOGIN</button>
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default SignUpPage;
