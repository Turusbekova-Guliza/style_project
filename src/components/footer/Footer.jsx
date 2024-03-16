import React from "react";
import "./Footer.scss";
import Logo from "../../assets/image/logo.jpg";
import Whatsapp from "../../assets/svg/wa footer.svg";
import Telegram from "../../assets/svg/t.me footer.svg";
import Instagram from "../../assets/svg/ins footer.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="blocks_footer-1">
            <div className="logo">
              <img className="logotip" src={Logo} alt="logotip" />
            </div>
            <hr />
          </div>
          <div className="blocks_footer-2">
            <div className="contact">
              <h3 className="footer_h3">Наши Контакты:</h3>
              <div className="social_con">
                <div className="social">
                  <a
                    className="wa"
                    href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                    target="_blank"
                  >
                    <img className="whatsapp" src={Whatsapp} alt="whatsapp" />
                    <p>WhatsApp</p>
                  </a>
                  <a
                    className="tg"
                    href="https://t.me/zimoda_kg"
                    target="_blank"
                  >
                    <img className="telegram" src={Telegram} alt="telegram" />
                    <p>Telegram</p>
                  </a>
                  <a
                    className="ins"
                    href="https://www.instagram.com/top.travel.kg"
                    target="_blank"
                  >
                    <img
                      className="instagram"
                      src={Instagram}
                      alt="instagram"
                    />
                    <p>Instagram</p>
                  </a>
                </div>
                <span className="line"></span>
                <div className="phone">
                  <a className="p_number" href="tel:996508500565">
                    +996-(508)-500-565
                  </a>
                  <a className="p_number" href="tel:996557500565">
                    +996-(557)-500-565
                  </a>
                </div>
              </div>
            </div>
            <div className="addresses">
              <h3 className="footer_h3">Адрес:</h3>
              <div className="address">
                <a
                  className="paddress"
                  href="https://2gis.kg/bishkek/geo/15763234351104599"
                  target="_blank"
                >
                  г.Бишкек, ул.Юсуп Абдрахманова 282
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="blocks_footer-3">
            <p className="except">
              “© 2023 Компания швейного производства{" "}
              <span style={{ color: "green" }}>ZIMODA</span> в городе Бишкек .
              Все права защищены.”
            </p>
            <p className="made-in">
              сделано:{" "}
              <a href="https://github.com/Turusbekova-Guliza" target="_blank">
                Турусбекова Гулиза
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
