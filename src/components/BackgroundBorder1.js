import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundBorder1.module.css";

const BackgroundBorder1 = ({
  className = "",
  prop,
  prop1,
  prop2,
  text,
  textWidth,
  featureDescription,
  featureDescriptionWidth,
  featureDetail,
  featureDetailWidth,
  featureLabel,
  featureLabelWidth,
  featureContent,
  featureContentWidth,
}) => {
  const textStyle = useMemo(() => {
    return {
      width: textWidth,
    };
  }, [textWidth]);

  const featureDescriptionStyle = useMemo(() => {
    return {
      width: featureDescriptionWidth,
    };
  }, [featureDescriptionWidth]);

  const featureDetailStyle = useMemo(() => {
    return {
      width: featureDetailWidth,
    };
  }, [featureDetailWidth]);

  const featureLabelStyle = useMemo(() => {
    return {
      width: featureLabelWidth,
    };
  }, [featureLabelWidth]);

  const featureContentStyle = useMemo(() => {
    return {
      width: featureContentWidth,
    };
  }, [featureContentWidth]);

  return (
    <div className={[styles.backgroundborder, className].join(" ")}>
      <div className={styles.overlayshadow} />
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
      <div className={styles.margin2}>
        <div className={styles.container}>
          <h3 className={styles.h3}>{prop1}</h3>
        </div>
      </div>
      <div className={styles.margin3}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{prop2}</h2>
        </div>
      </div>
      <div className={styles.listmargin}>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.div2}>✓</div>
            <div className={styles.text} style={textStyle}>
              {text}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.div2}>✓</div>
            <div
              className={styles.featureDescription}
              style={featureDescriptionStyle}
            >
              {featureDescription}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.div2}>✓</div>
            <div className={styles.featureDetail} style={featureDetailStyle}>
              {featureDetail}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.div2}>✓</div>
            <div className={styles.featureLabel} style={featureLabelStyle}>
              {featureLabel}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.div2}>✓</div>
            <div className={styles.featureContent} style={featureContentStyle}>
              {featureContent}
            </div>
          </div>
        </div>
      </div>
      <a href="#callback" className={styles.button}>
        <div className={styles.text2}>Получить предложение</div>
      </a>
    </div>
  );
};

BackgroundBorder1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  text: PropTypes.string,
  featureDescription: PropTypes.string,
  featureDetail: PropTypes.string,
  featureLabel: PropTypes.string,
  featureContent: PropTypes.string,

  /** Style props */
  textWidth: PropTypes.string,
  featureDescriptionWidth: PropTypes.string,
  featureDetailWidth: PropTypes.string,
  featureLabelWidth: PropTypes.string,
  featureContentWidth: PropTypes.string,
};

export default BackgroundBorder1;
