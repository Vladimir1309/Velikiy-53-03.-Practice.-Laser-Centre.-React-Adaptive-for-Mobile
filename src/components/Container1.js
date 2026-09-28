import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.border}>
        <div className={styles.text}>
          САНКТ-ПЕТЕРБУРГ · РАБОТАЕМ С 2006 ГОДА
        </div>
      </div>
      <div className={styles.heading1}>
        <h1 className={styles.h1}>
          <span className={styles.span}>
            Профессиональная
            <br />
            лазерная
            <br />
            гравировка и резка
            <br />
          </span>
          <span className={styles.span2}>для Вашего бизнеса</span>
        </h1>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.div}>✓</div>
          <div className={styles.text2}>
            Работаем с 2006 года — 20 лет опыта в Санкт-Петербурге
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.div}>✓</div>
          <div className={styles.text3}>
            Станки российского производства, точность ±0,05 мм
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.div}>✓</div>
          <div className={styles.text4}>
            В команде — только кандидаты наук и профессионалы с многолетним
            стажем
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.div}>✓</div>
          <div className={styles.text5}>
            Срочные заказы от 2 часов · Доставка по всей России
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <a href="#callback" className={styles.button}>
          <div className={styles.actionLabel}>Получить расчёт бесплатно</div>
        </a>
        <a href="#services" className={styles.button2}>
          <div className={styles.actionLabel}>Смотреть услуги →</div>
        </a>
      </div>
      <div className={styles.container3}>
        <div className={styles.div6}>
          <span className={styles.span3}>{`или позвоните: `}</span>
          <a className={styles.span4} href="tel:+78122405060">
            (812) 240-5060
          </a>
        </div>
      </div>
    </section>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
