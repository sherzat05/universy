import React from "react";
import img from "../img/рабочий-стол-с-лампой-ноутбуком-книгами-и-бумагами-белым-фоном-158308548-transformed 2.png";
import pic1 from "../img/Rectangle 1.png";
import pic2 from "../img/Rectangle 2.png";
import pic3 from "../img/Rectangle 3.png";
import pic4 from "../img/Rectangle 4.png";
import pic5 from "../img/Rectangle 5.png";
import pic6 from "../img/Rectangle 6.png";
import { Link } from "react-router-dom";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>;

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-content">
          <h1>
            Ваш универсальный <br />
            инструмент для успеха в учебе
          </h1>
          <button>Зарегистрироваться</button>
        </div>
        <img className="bg" src={img} alt="" />
      </div>
      <section id="blocks">
        <div className="block">
          <h1>
            Модель подписки и размещение рекламы предоставляют <br />{" "}
            потенциальные источники дохода для проекта. На основе анализа <br />{" "}
            рынка можно сделать вывод, что "Students Space" имеет <br />{" "}
            потенциал привлечь
          </h1>
          <div className="blocks">
            <div className="card">
              <h2>01.</h2>
              <h3>Текст</h3>
              <p>
                Модель подписки и <br /> размещение рекламы <br /> предоставляют
                потенциальные <br />
                источники дохода для проекта. <br /> На основе анализа рынка{" "}
              </p>
            </div>
            <div className="card">
              <h2>02.</h2>
              <h3>Текст</h3>
              <p>
                Модель подписки и <br /> размещение рекламы <br /> предоставляют
                потенциальные <br />
                источники дохода для проекта. <br /> На основе анализа рынка{" "}
              </p>
            </div>
            <div className="card">
              <h2>03.</h2>
              <h3>Текст</h3>
              <p>
                Модель подписки и <br /> размещение рекламы <br /> предоставляют
                потенциальные <br />
                источники дохода для проекта. <br /> На основе анализа рынка{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="pictures">
        <div className="pics">
          <img src={pic1} alt="" />
          <div className="pic-bottom">
            <img className="pic-bottom-bg" src={pic2} alt="" />
            <div className="pic-right">
              <div className="pic-1">
                <img src={pic3} alt="" />
                <img src={pic4} alt="" />
              </div>
              <div className="pic-2">
                <img src={pic5} alt="" />
                <img src={pic6} alt="" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="end">
          Приближает вас к людям, <br />и вещам которые вы любите
        </h1 >
      </section>
    </div>
  );
};

export default Home;
