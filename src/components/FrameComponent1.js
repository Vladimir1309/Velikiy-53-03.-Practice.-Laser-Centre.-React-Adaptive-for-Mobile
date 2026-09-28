import Container2 from "./Container2";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "", id }) => {
  return (
    <section id={id} className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.heading2}>
            <h2 className={styles.h2}>Контакты</h2>
          </div>
          <div className={styles.background} />
        </div>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.background2}>
                <div className={styles.div}>📍</div>
              </div>
              <Container2
                text="АДРЕС"
                text1={`г. Санкт-Петербург, ул. Маршала
Тухачевского, д. 22, БЦ «Сова»,
оф. 228-231`}
              />
            </div>
            <div className={styles.container6}>
              <div className={styles.background2}>
                <div className={styles.div}>📞</div>
              </div>
              <Container2
                text="ТЕЛЕФОНЫ"
                text1={`Тел.: (812) 240-5060, 326-7892
(812) 332-0659, 380-4361`}
              />
            </div>
            <div className={styles.container7}>
              <div className={styles.background2}>
                <div className={styles.div}>✉</div>
              </div>
              <Container2 text="EMAIL" text1="info@newlaser.ru" />
            </div>
            <div className={styles.container8}>
              <div className={styles.background2}>
                <div className={styles.div}>🕐</div>
              </div>
              <Container2
                text="РЕЖИМ РАБОТЫ"
                text1={`Пн–Пт: 9:00–20:00
Сб–Вс: 10:00–17:00`}
              />
            </div>
          </div>
          <div className={styles.container9}>
            <div className={styles.heading3}>
              <b className={styles.b}>Написать нам</b>
            </div>
            <div className={styles.container10}>
              <a
                className={styles.link}
                href="https://wa.me/78122405060"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.text}>WhatsApp</div>
              </a>
              <a
                className={styles.link2}
                href="https://t.me/+78122405060"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.text}>Telegram</div>
              </a>
            </div>
            <a href="#callback" className={styles.button}>
              <div className={styles.text}>Заказать обратный звонок</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default FrameComponent1;
