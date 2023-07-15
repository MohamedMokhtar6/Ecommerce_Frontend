import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Actions/AuthAction";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const res = useSelector((state) => state.authReducer.loginUser);
  const handleChangePassword = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const onSubmit = async () => {
    if (email === "" || password === "") {
      notify("enter Email or Password", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          notify(res.data.masseage, "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify(res.data, "warn");
        }

        // if (
        //   res.data.title == "Unauthorized" ||
        //   res.status == 401 ||
        //   res.status == 404
        // ) {
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("user");
        //   localStorage.removeItem("email");
        //   notify("There was problem in Email or Password", "error");
        // }
        setLoading(true);
      }
    }
  }, [loading]);
  return (
    <div className="loginPage">
      <Container className="h-100 d-flex  justify-content-center align-items-center">
        <div className=" login fit  d-flex flex-column align-items-center">
          <div className="my-3 text-center">
            <h3 className="loginText">Welcome back!</h3>
            <h3 className="loginText">Sign in to your account</h3>
            <h6 className="loginText">
              Don't have an account ?
              <Link to="/signup" className="text-main ms-1">
                Sign Up
              </Link>
            </h6>
          </div>
          <div className="divInput">
            <i className="fa-solid fa-envelope mx-2 "></i>

            <input
              type="email"
              placeholder="Your Email"
              className="logInInput my-2"
              value={email}
              onChange={handleChangeEmail}
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <i className="fa-solid fa-lock mx-2"></i>
            <input
              type="password"
              placeholder="Password"
              className="logInInput pass my-2"
              value={password}
              onChange={handleChangePassword}
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
          <button className="p-1 mt-4 loginBtn" onClick={onSubmit}>
            LOGIN
          </button>
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default LoginForm;
