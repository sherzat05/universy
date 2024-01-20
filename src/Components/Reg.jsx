import React from "react";
import eye from "../img/eye nav.svg";
import google from "../img/image 1.svg";
import facebook from "../img/image 2.svg";
const Reg = () => {
  return (
    <div className="container">
      <div className="reg">
        <h1>Регистрация</h1>
        <div className="reg-content">
          <div className="name">
            <h4>Имя</h4>
            <input type="text" placeholder="Введите свое имя" />
          </div>
          <div className="soName">
            <h4>Фамилие</h4>
            <input type="text" placeholder="Введите свое фамилие" />
          </div>
          <div className="email">
            <h4>Почта</h4>
            <input type="text" placeholder="Введите свою почту" />
          </div>
          <div className="regPass">
            <h4>Пароль*</h4>
            <input type="text" placeholder="Введите свой пароль" />
            <button>
              <img src={eye} alt="" />
            </button>
          </div>
          <div className="chek">
            <input type="checkbox" />   
            <h4>Согласен с Условиями</h4>
          </div>
          <button className="regBtn">Зарегистрироваться</button>
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

export default Reg;
