import React from "react";
import bigImg from "../img/unsplash_XHBCqZGZre0.png";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import google from "../img/image 1.svg";
import facebook from "../img/image 2.svg";
import eye from "../img/eye nav.svg";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <img src={bigImg} alt="" />
        <div className="login-right">
          <h1>Добро пожаловать</h1>
          <div className="email">
            <h4>Почта</h4>
            <input type="text" placeholder="Введите свою почту" />
          </div>
          <div className="password">
            <h4>Пароль*</h4>
            <input type="text" placeholder="Введите свой пароль" />
            <button className="eye">
              <img src={eye} alt="" />
            </button>
          </div>
          <button className="vhod">Вход</button>
          <h3>
            У вас нет аккаунта?{" "}
            <Link to="reg">
              {" "}
              <span>Зарегистрироваться</span>
            </Link>{" "}
          </h3>
          <div className="line">
            <div className="line1"></div>
            <h6>или</h6>
            <div className="line1"></div>
          </div>
          <div className="buttons">
            <button>
              <img src={google} alt="" />
              google
            </button>
            <button>
              <img src={facebook} alt="" />
              facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
