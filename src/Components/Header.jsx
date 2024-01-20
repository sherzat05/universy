import React from "react";
import { Link } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>;
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to="home">
        <h3>
          Student <br /> Space
        </h3>
        </Link>
        <div className="headerNav">
          <Link to="reg">
          <h5>Консультация</h5>
          </Link>
          <Link to="chat">
          <h5>Контакты</h5>
          </Link>
          <Link to="login">
          <button>войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
