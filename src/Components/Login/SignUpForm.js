import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify";
import { createNewUser, loginUser } from "../../redux/Actions/AuthAction";
import { createCart } from "../../redux/Actions/CartAction";

function SignUpPage() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const res = useSelector((state) => state.authReducer.createUser);
  const signRes = useSelector((state) => state.authReducer.loginUser);
  const cartRes = useSelector((state) => state.cartReducer.cart);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      password === "" ||
      email === "" ||
      phone === ""
    ) {
      notify("please complet data", "warn");
      return;
    }
    if (phone.length <= 10) {
      notify("there was problem in phone number", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createNewUser({
        password: password,
        email: email,
        username: userName,
        phoneNumber: phone,
        firstName: firstName,
        lastName: lastName,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      console.log(res);

      if (res.status !== 400) {
        notify(res.data.masseage, "success");
        setInterval(() => {
          navigate("/login");
        }, 1500);
      } else {
        notify(res.data, "warn");
      }
    }
  }, [loading]);

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
              value={email}
              onChange={handleChangeEmail}
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
          <div className="divInput">
            <input
              type="text"
              className="logInInput"
              placeholder="First Name"
              value={firstName}
              onChange={handleChangeFirstName}
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input
              type="text"
              className="logInInput"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChangeLastName}
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <div className="divInput">
            <input
              type="text"
              className="logInInput"
              placeholder="User Name"
              value={userName}
              onChange={handleChangeUserName}
            />
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
              value={phone}
              onChange={handleChangePhone}
            />
            <i
              className="fa-solid fa-lock "
              style={{ visibility: "hidden" }}
            ></i>
          </div>
          <button className="p-1 mt-4 loginBtn" onClick={onSubmit}>
            SignUp
          </button>
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default SignUpPage;
