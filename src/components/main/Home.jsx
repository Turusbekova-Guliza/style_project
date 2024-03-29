import React, { useState } from "react";
import "./Home.scss";
import JacketSlider from "../sliders/jacketSlider/JacketSlider";
import TrouserSlider from "../sliders/trouserSlider/TrouserSlider";
import DressSlider from "../sliders/dressSlider/DressSlider";
import SkirtSlider from "../sliders/skirtSlider/SkirtSlider";
import BlouseSlider from "../sliders/blouseSlider/BlouseSlider";
import ShirtSlider from "../sliders/shirtSlider/ShirtSlider";
import SportSlider from "../sliders/sportSlider/SportSlider";
import SewCom from "../../assets/svg/sew-svgrepo-com.svg";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSummaryClick = (itemName) => {
    if (selectedItem === itemName) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemName);
    }
  };

  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home_block">
            <h1 className="zimoda">ZIMODA</h1>
            <h1 className="h1_name">Швейное производство</h1>
            <h6 className="h6_home">Ваша идея наше воплощение</h6>
          </div>
        </div>
      </section>
      <section id="about" className="section_about">
        <div className="container">
          <h2>О нас</h2>
          <div className="about">
            <div className="additional-services">
              <h3>О нашей компании</h3>
              <p>
                Производство одежды полного цикла, функционирует в индустрии
                легкой промышленности с 2020 года в Кыргызстане.
              </p>
            </div>
            <div className="capacity">
              <h3>Мощность производства</h3>
              <p>Мы можем производить до 20 000 штук в месяц.</p>
            </div>
            <div className="consultation">
              <h3>Сотрудничество</h3>
              <p>
                Мы сотрудничаем с крупными селлерами маркетплейсов.
                OZON,WB,LAMODA, а также оптовиками из крупных рынков СНГ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>Наши услуги</h2>
          <ul>
            <li>
              <p className="local">Брендинг под ключ</p>
              <p className="decor">
                Разработаем уникальную модель под-ваш бренд
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5766/5766065.png"
                alt=""
              />
            </li>
            <li>
              <p className="local">Разработка лейкало</p>
              <p className="decor">
                С нами работают лучшие конструкторы, самые быстрые сроки
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2635/2635065.png"
                alt=""
              />
            </li>
            <li>
              <p className="local">Онлайн сопровождение</p>
              <div className="decor">
                На всех этапах производства, видео и фото отчеты
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6994/6994400.png"
                alt=""
              />
            </li>
            <li>
              <p className="local">Контроль качество</p>
              <p className="decor">
                Особое внимание к проверке качества и соответствию стандартам
                клиента. следящая за каэдым этапом производства
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2100/2100020.png"
                alt=""
              />
            </li>
            <li>
              <div className="local">Документация</div>
              <p className="decor">
                Предоставляем всю документацию в соотвествии с требованием
                маркетплейса
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2100/2100020.png"
                alt=""
              />
            </li>
            <li>
              <p className="local">Услуги фулфильмента</p>
              <img src={SewCom} style={{ width: "60%" }} alt="" />
            </li>
            <li>
              <p className="local">
                Сублимация, декатировка, вышивка, шелкография
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/107/107828.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="section_checkout">
        <div className="container">
          <div className="block_checkout">
            <button className="btn_checkout">
              <a
                href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                target="_blank"
              >
                Оформить заказ
              </a>
            </button>
          </div>
        </div>
      </section>
      <section id="category" className="sliders">
        <div className="container">
          <div className="sliders_block">
            <h2>Каталог</h2>
            <div className="product_block">
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("jackets")}
                    className={`summary ${
                      selectedItem === "jackets" ? "active" : ""
                    }`}
                  >
                    <div className="title">Пиджаки</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "jackets" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <JacketSlider />
                    </a>{" "}
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("trousers")}
                    className={`summary ${
                      selectedItem === "trousers" ? "active" : ""
                    }`}
                  >
                    <div className="title">Брюки</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "trousers" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <TrouserSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("dresses")}
                    className={`summary ${
                      selectedItem === "dresses" ? "active" : ""
                    }`}
                  >
                    <div className="title">Платья</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "dresses" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <DressSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("skirts")}
                    className={`summary ${
                      selectedItem === "skirts" ? "active" : ""
                    }`}
                  >
                    <div className="title">Юбки</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "skirts" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <SkirtSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("blouses")}
                    className={`summary ${
                      selectedItem === "blouses" ? "active" : ""
                    }`}
                  >
                    <div className="title">Блузки</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "blouses" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <BlouseSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("shirts")}
                    className={`summary ${
                      selectedItem === "skirts" ? "active" : ""
                    }`}
                  >
                    <div className="title">Рубашки</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "shirts" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <ShirtSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clothes_block">
                <div className="details">
                  <div
                    onClick={() => handleSummaryClick("sports")}
                    className={`summary ${
                      selectedItem === "sports" ? "active" : ""
                    }`}
                  >
                    <div className="title">Спортивные</div>
                  </div>
                  <div
                    className={`slider-comp ${
                      selectedItem === "sports" ? "active" : ""
                    }`}
                  >
                    <a
                      href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                      target="_blank"
                    >
                      <SportSlider />
                    </a>
                    <button className="btn-order">
                      <a
                        href="https://wa.me/996508500565?text=Я%20хочу%20заказать%20одежду%20и%20получить%20информацию."
                        target="_blank"
                      >
                        Заказать
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mores">
        <div className="container">
          <div className="more_desc">
            <p>
              Предоставляем индивидуальные условия сотрудничества для каждого
              клиента. Фиксированные цены и гибкие условия по оплате для дилеров
              и оптовых компаний.{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
