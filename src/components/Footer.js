import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <header className={styles.container2}>
          <div className={styles.container3}>
            <a
              className={styles.div}
              href="#top"
              aria-label="Лазерный Центр — наверх страницы"
            >
              <img
                className={styles.logoNewsvgIcon}
                alt="Лазерный Центр"
                src="./Лазерный Центр.svg"
              />
            </a>
            <div className={styles.margin}>
              <div className={styles.text}>
                © 2006–2026
                <br />
                Лазерный Центр
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.margin2}>
              <div className={styles.div2}>📍</div>
            </div>
            <div className={styles.container5}>
              <div className={styles.text2}>
                г. Санкт-Петербург, ул. Маршала
                <br />
                Тухачевского, д. 22, БЦ «Сова», оф.
                <br />
                228-231
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.margin2}>
              <div className={styles.div2}>📞</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.footerDescriptionParent}>
                <div className={styles.footerDescription}>{`Тел.: `}</div>
                <div className={styles.link812}>(812) 240-5060, 326-7892</div>
              </div>
              <div className={styles.link8122}>(812) 332-0659, 380-4361</div>
            </div>
          </div>
          <div className={styles.container7}>
            <div className={styles.margin2}>
              <div className={styles.div2}>✉</div>
            </div>
            <div className={styles.linkInfonewlaserru}>info@newlaser.ru</div>
          </div>
        </header>
        <div className={styles.horizontalborder}>
          <div className={styles.container8}>
            <div className={styles.container9}>
              <div className={styles.text}>Подписаться</div>
            </div>
            <div className={styles.container10}>
              <a
                className={styles.link}
                href="https://vk.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="ВКонтакте"
              >
                <b className={styles.text}>ВК</b>
              </a>
              <a
                className={styles.link}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <b className={styles.text}>YT</b>
              </a>
              <a
                className={styles.link}
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <b className={styles.text}>TG</b>
              </a>
            </div>
          </div>
          <a className={styles.policyLink} href="/privacy-policy">
            Политика конфиденциальности
          </a>
        </div>
        <a href="#top" className={styles.backToTop}>
          ↑ Наверх
        </a>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
