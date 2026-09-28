import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundVerticalBorder.module.css";

const BackgroundVerticalBorder = ({
  className = "",
  backgroundVerticalBorderBackgroundColor,
  backgroundVerticalBorderBorderRight,
  text,
  text1,
  text2,
}) => {
  const backgroundVerticalBorderStyle = useMemo(() => {
    return {
      backgroundColor: backgroundVerticalBorderBackgroundColor,
      borderRight: backgroundVerticalBorderBorderRight,
    };
  }, [
    backgroundVerticalBorderBackgroundColor,
    backgroundVerticalBorderBorderRight,
  ]);

  return (
    <div
      className={[styles.backgroundverticalborder, className].join(" ")}
      style={backgroundVerticalBorderStyle}
    >
      <div className={styles.container}>
        <h1 className={styles.text}>{text}</h1>
      </div>
      <div className={styles.container2}>
        <b className={styles.text2}>{text1}</b>
      </div>
      <div className={styles.container3}>
        <div className={styles.text3}>{text2}</div>
      </div>
    </div>
  );
};

BackgroundVerticalBorder.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,

  /** Style props */
  backgroundVerticalBorderBackgroundColor: PropTypes.string,
  backgroundVerticalBorderBorderRight: PropTypes.string,
};

export default BackgroundVerticalBorder;
