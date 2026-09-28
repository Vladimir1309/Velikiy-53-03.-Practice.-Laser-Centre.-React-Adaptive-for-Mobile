import PropTypes from "prop-types";
import styles from "./Background.module.css";

const Background = ({ className = "" }) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.overlayshadow} />
      <div className={styles.container}>
        <div className={styles.container2}>
          <b className={styles.text}>Нужен точный расчёт?</b>
        </div>
        <div className={styles.container3}>
          <div className={styles.text2}>
            Отправьте макет или опишите задачу — рассчитаем стоимость бесплатно
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <a href="#callback" className={styles.button}>
          <div className={styles.text3}>Отправить запрос</div>
        </a>
        <a href="tel:+78122405060" className={styles.link}>
          <div className={styles.text3}>📞 (812) 240-5060</div>
        </a>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
