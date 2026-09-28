import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.headershadow} />
      <div className={styles.container}>
        <a className={styles.div} href="#top" aria-label="Лазерный Центр — на главную">
          <img
            className={styles.logoNewsvgIcon}
            loading="lazy"
            alt="Лазерный Центр"
            src="./Лазерный Центр.svg"
          />
        </a>
        <nav className={styles.container2} aria-label="Основная навигация">
          <a className={styles.button} href="#services">
            <div className={styles.text}>Услуги</div>
          </a>
          <a className={[styles.button, styles.navSecondary].join(" ")} href="#about">
            <div className={styles.text}>О нас</div>
          </a>
          <a className={[styles.button, styles.navSecondary].join(" ")} href="#contacts">
            <div className={styles.text}>Контакты</div>
          </a>
          <a className={styles.link} href="tel:+78122405060">
            <div className={styles.text}>(812) 240-5060</div>
          </a>
          <a className={styles.button4} href="#callback">
            <div className={styles.text}>Заказать звонок</div>
          </a>
        </nav>
        <MobileMenu />
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
