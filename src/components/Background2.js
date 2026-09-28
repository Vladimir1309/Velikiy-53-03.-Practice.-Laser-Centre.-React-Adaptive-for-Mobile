import PropTypes from "prop-types";
import styles from "./Background2.module.css";

const Background2 = ({ className = "" }) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <h3 className={styles.h3}>Услуги лазерной гравировки</h3>
        </div>
        <section className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.background2}>
              <div className={styles.div}>✦</div>
            </div>
            <div className={styles.container4}>
              <div className={styles.heading2}>
                <b className={styles.text}>Лазерная гравировка</b>
              </div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Подарков</div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Фотографий</div>
                </div>
                <div className={styles.item3}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Бизнес-сувениров</div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Ювелирных изделий</div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Наград и медалей</div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Клавиатур и гаджетов</div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.text14}>•</div>
                  <div className={styles.text15}>
                    Лазерная маркировка промышленных
                    <br />
                    изделий
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.background2}>
              <div className={styles.div}>◻</div>
            </div>
            <div className={styles.container4}>
              <div className={styles.heading2}>
                <b className={styles.text}>Изготовление продукции</b>
              </div>
              <div className={styles.list}>
                <div className={styles.item5}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Таблички</div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Корпоративные награды</div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Номерки, бирки, жетоны</div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Бейджи и визитки</div>
                </div>
                <div className={styles.item12}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Сувенирная продукция</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container9}>
            <div className={styles.background2}>
              <h3 className={styles.h32}>⬡</h3>
            </div>
            <div className={styles.container10}>
              <div className={styles.heading2}>
                <b className={styles.text}>Лазерная резка</b>
              </div>
              <div className={styles.list}>
                <div className={styles.item13}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Металл</div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Пластик и акрил</div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.text14}>•</div>
                  <div className={styles.text15}>Дерево и фанера</div>
                </div>
                <div className={styles.item16}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Оргстекло</div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Кожа</div>
                </div>
                <div className={styles.item13}>
                  <div className={styles.text2}>•</div>
                  <div className={styles.text3}>Стекло</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.container12}>
          <a href="tel:+78122405060" className={styles.link}>
            <div className={styles.div3}>📞 (812) 240-5060</div>
          </a>
          <a href="#prices" className={styles.button}>
            <div className={styles.div3}>⬡ Прайс-лист на услуги</div>
          </a>
        </div>
      </div>
    </section>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
};

export default Background2;
