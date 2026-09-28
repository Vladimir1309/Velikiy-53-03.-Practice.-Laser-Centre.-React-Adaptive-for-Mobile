import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundBorderShadow.module.css";

const BackgroundBorderShadow = ({
  className = "",
  backgroundBorderShadowGridColumn,
  backgroundBorderShadowGridRow,
  prop,
  prop1,
  prop2,
}) => {
  const backgroundBorderShadow1Style = useMemo(() => {
    return {
      gridColumn: backgroundBorderShadowGridColumn,
      gridRow: backgroundBorderShadowGridRow,
    };
  }, [backgroundBorderShadowGridColumn, backgroundBorderShadowGridRow]);

  return (
    <section
      className={[styles.backgroundbordershadow, className].join(" ")}
      style={backgroundBorderShadow1Style}
    >
      <div className={styles.container}>
        <img className={styles.icon} alt="" src={prop} />
        <div className={styles.container2}>
          <div className={styles.container3}>
            <a href="#callback" className={styles.button}>
              <div className={styles.productTitle}>Заказать →</div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.container5}>
          <div className={styles.div}>{prop1}</div>
        </div>
        <div className={styles.container6}>
          <div className={styles.div2}>{prop2}</div>
        </div>
      </div>
    </section>
  );
};

BackgroundBorderShadow.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,

  /** Style props */
  backgroundBorderShadowGridColumn: PropTypes.string,
  backgroundBorderShadowGridRow: PropTypes.string,
};

export default BackgroundBorderShadow;
