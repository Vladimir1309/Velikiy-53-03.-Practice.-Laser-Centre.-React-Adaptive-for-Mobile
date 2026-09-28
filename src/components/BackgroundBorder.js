import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundBorder.module.css";

const BackgroundBorder = ({
  className = "",
  backgroundBorderPadding,
  backgroundBorderGridColumn,
  backgroundBorderGridRow,
  containerPadding,
  prop,
  prop1,
  prop2,
}) => {
  const backgroundBorder1Style = useMemo(() => {
    return {
      padding: backgroundBorderPadding,
      gridColumn: backgroundBorderGridColumn,
      gridRow: backgroundBorderGridRow,
    };
  }, [
    backgroundBorderPadding,
    backgroundBorderGridColumn,
    backgroundBorderGridRow,
  ]);

  const containerStyle = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);

  return (
    <section
      className={[styles.backgroundborder, className].join(" ")}
      style={backgroundBorder1Style}
    >
      <div className={styles.overlayshadow} />
      <div className={styles.div}>★★★★★</div>
      <div className={styles.container} style={containerStyle}>
        <div className={styles.div2}>{prop}</div>
      </div>
      <div className={styles.horizontalborder}>
        <div className={styles.container2}>
          <b className={styles.b}>{prop1}</b>
        </div>
        <div className={styles.container3}>
          <div className={styles.div3}>{prop2}</div>
        </div>
      </div>
    </section>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,

  /** Style props */
  backgroundBorderPadding: PropTypes.string,
  backgroundBorderGridColumn: PropTypes.string,
  backgroundBorderGridRow: PropTypes.string,
  containerPadding: PropTypes.string,
};

export default BackgroundBorder;
