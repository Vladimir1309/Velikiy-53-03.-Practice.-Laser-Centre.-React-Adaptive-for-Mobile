import PropTypes from "prop-types";
import styles from "./OverlayHorizontalBorder.module.css";

const OverlayHorizontalBorder = ({ className = "" }) => {
  return (
    <section className={[styles.overlayhorizontalborder, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <b className={styles.text}>20 лет</b>
            </div>
            <div className={styles.container5}>
              <div className={styles.statDescription}>с 2006 года</div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.container4}>
              <b className={styles.text}>15 000+</b>
            </div>
            <div className={styles.container5}>
              <div className={styles.statDescription}>выполненных заказов</div>
            </div>
          </div>
          <div className={styles.container9}>
            <div className={styles.container4}>
              <b className={styles.text}>100%</b>
            </div>
            <div className={styles.container5}>
              <div className={styles.statDescription}>специалисты</div>
            </div>
          </div>
          <div className={styles.container12}>
            <div className={styles.container4}>
              <b className={styles.text}>±0,05 мм</b>
            </div>
            <div className={styles.container5}>
              <div className={styles.statDescription}>точность работы</div>
            </div>
          </div>
        </div>
        <a href="#callback" className={styles.button}>
          <div className={styles.text7}>Заказать прямо сейчас</div>
        </a>
      </div>
    </section>
  );
};

OverlayHorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default OverlayHorizontalBorder;
