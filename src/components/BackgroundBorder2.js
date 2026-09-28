import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundBorder2.module.css";

const BackgroundBorder2 = ({
  className = "",
  backgroundBorderGridColumn,
  backgroundBorderGridRow,
  prop,
  prop1,
  phD,
}) => {
  const backgroundBorderStyle = useMemo(() => {
    return {
      gridColumn: backgroundBorderGridColumn,
      gridRow: backgroundBorderGridRow,
    };
  }, [backgroundBorderGridColumn, backgroundBorderGridRow]);

  return (
    <div
      className={[styles.backgroundborder, className].join(" ")}
      style={backgroundBorderStyle}
    >
      <div className={styles.overlayshadow} />
      <div className={styles.container}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.container2}>
        <b className={styles.b}>{prop1}</b>
      </div>
      <div className={styles.container3}>
        <div className={styles.phd}>{phD}</div>
      </div>
    </div>
  );
};

BackgroundBorder2.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  phD: PropTypes.string,

  /** Style props */
  backgroundBorderGridColumn: PropTypes.string,
  backgroundBorderGridRow: PropTypes.string,
};

export default BackgroundBorder2;
