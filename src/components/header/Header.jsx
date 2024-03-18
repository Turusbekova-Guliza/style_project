import React from "react";
import "./Header.scss";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/image/logo.jpg";
import Whatsapp from "../../assets/svg/wa footer.svg";
import Telegram from "../../assets/svg/t.me footer.svg";
import Instagram from "../../assets/svg/ins footer.svg";
import Email from "../../assets/svg/email footer.svg";
import Call from "../../assets/svg/call footer.svg";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img className="logotip" src={Logo} alt="logotip" />
          </div>
          <div className={menuVisible ? "block_menu open" : "block_menu"}>
            <ul className="ul_menu">
              <Link className="link" to="about" smooth={true} duration={500}>
                О НАС
              </Link>
              <Link className="link" to="category" smooth={true} duration={500}>
                КАТАЛОГ
              </Link>
              <Link className="link" to="contact" smooth={true} duration={500}>
                КОНТАКТЫ
              </Link>
            </ul>
          </div>
          <div className="burger_menu" onClick={toggleBurgerMenu}>
            <button
              className={
                menuVisible ? "btn-burger_menu open" : "btn-burger_menu"
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={menuVisible ? "click_menu open" : "click_menu"}>
              <div className="menu">
                <a
                  href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                  target="_blank"
                >
                  <img className="img_icons" src={Whatsapp} alt="ватсап" />
                </a>
              </div>
              <div className="menu">
                <a
                  href="http://t.me/zimoda_kg?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                  target="_blank"
                >
                  <img className="img_icons" src={Telegram} alt="телеграм" />
                </a>
              </div>
              <div className="menu">
                <a href="http://instagram.com/top.travel.kg" target="_blank">
                  <img className="img_icons" src={Instagram} alt="инстаграм" />
                </a>
              </div>
              <div className="menu">
                <a href="mailto:Ziyada86@list.ru" target="_blank">
                  <img className="img_icons" src={Email} alt="почта" />
                </a>
              </div>
              <div className="menu">
                <a href="tel:996508500565" target="_blank">
                  <img className="img_icons" src={Call} alt="номер" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
