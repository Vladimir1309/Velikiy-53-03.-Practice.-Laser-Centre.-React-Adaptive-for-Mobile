import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "", text, text1 }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container2}>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.container3}>
        <div className={styles.text2}>{text1}</div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default Container2;
