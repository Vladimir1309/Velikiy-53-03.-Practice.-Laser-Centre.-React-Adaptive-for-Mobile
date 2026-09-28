import BackgroundBorderShadow1 from "./BackgroundBorderShadow1";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.headerLabel}>ЧТО МЫ ДЕЛАЕМ</div>
            </div>
            <div className={styles.heading2}>
              <h2 className={styles.text}>Услуги</h2>
            </div>
            <div className={styles.background} />
          </div>
          <div className={styles.container5}>
            <a href="#callback" className={styles.button}>
              <div className={styles.actionTitle}>Заказать обратный звонок</div>
            </a>
            <a href="#prices" className={styles.button2}>
              <div className={styles.actionTitle}>Прайс-лист на услуги</div>
            </a>
          </div>
        </div>
        <div className={styles.container6}>
          <BackgroundBorderShadow1
            prop="./Услуги. Лазерная гравировка.png"
            prop1="Лазерная гравировка"
            listLabel="Лазерная гравировка подарков"
            secondLabel="Лазерная гравировка бизнес-сувениров"
            itemCard="Гравировка колец, ювелирных изделий"
            itemCard1="Гравировка наград и медалей"
            itemCard2="Лазерная гравировка клавиатуры"
            itemCard3={`Лазерная гравировка смартфонов, телефонов,
цифровых гаджетов`}
          />
          <section className={styles.backgroundbordershadow}>
            <div className={styles.background2}>
              <img className={styles.icon} alt="" src="./Услуги. Промышленная лазерная маркировка и гравировка.png" />
              <div className={styles.overlay} />
            </div>
            <div className={styles.container7}>
              <div className={styles.heading3margin}>
                <div className={styles.container4}>
                  <b className={styles.b}>
                    Промышленная лазерная маркировка и<br className={styles.mobileBreak} />{" "}
                    гравировка
                  </b>
                </div>
              </div>
              <div className={styles.listmargin}>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная маркировка промышленных изделий
                      </div>
                    </a>
                  </div>
                  <div className={styles.item2}>
                    <a href="#callback" className={styles.button4}>
                      <div className={styles.text3}>
                        Лазерная маркировка шкал для измерительных
                        <br className={styles.mobileBreak} />
                        приборов
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная маркировка медицинского инструмента
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Наклейки, гарантийные этикетки, стикеры
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная маркировка штрихкодов
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Промышленные таблички с лазерной гравировкой
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная гравировка кнопок с подсветкой
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="#callback" className={styles.button10}>
                <b className={styles.text10}>ЗАКАЗАТЬ УСЛУГУ</b>
              </a>
            </div>
          </section>
          <BackgroundBorderShadow1
            backgroundBorderShadowGridColumn="3"
            backgroundBorderShadowGridRow="1"
            backgroundBackgroundColor="#f5f5f5"
            prop="./Услуги. Изготовление сувенирной и подарочной продукции.png"
            prop1={`Изготовление сувенирной и подарочной
продукции`}
            listPadding="0px 0px 30px"
            listLabel="Подарки на выпускной"
            secondLabel="Изготовление наградной продукции"
            itemCard="Часы на заказ"
            itemCard1="Пасхальные сувениры"
            itemPadding="0px 0px 1px"
            buttonPadding="0px 2px 0px 0px"
            itemCard2={`Новогодние сувениры с гравировкой символики на
заказ`}
            itemPadding1="2.5px 0px 1px"
            buttonPadding1="unset"
            itemCard3="Эксклюзивные сувениры"
          />
          <BackgroundBorderShadow1
            backgroundBorderShadowGridColumn="1"
            backgroundBorderShadowGridRow="2"
            backgroundBackgroundColor="#111"
            prop="./Услуги. Изготовим продукцию с фирменным стилем компании.png"
            prop1={`Изготовим продукцию с фирменным
стилем компании`}
            listPadding="0px 0px 60px"
            listLabel="Таблички"
            secondLabel="Корпоративные награды"
            itemCard="Номерки, бирки, жетоны"
            itemCard1="Бейджи, визитки и карточки"
            itemPadding="2.5px 0px 1px"
            buttonPadding="unset"
            itemCard2="Подставки из оргстекла"
            itemPadding1="2.5px 0px 1px"
            buttonPadding1="unset"
            itemCard3="Изготовление печатей"
          />
          <section className={styles.backgroundbordershadow2}>
            <div className={styles.background3}>
              <img className={styles.icon} alt="" src="./Услуги. Лазерная резка и гравировка листовых материалов.png" />
              <div className={styles.overlay} />
            </div>
            <div className={styles.container7}>
              <div className={styles.heading3margin}>
                <div className={styles.container4}>
                  <b className={styles.b}>
                    Лазерная резка и гравировка листовых{" "}
                    <br className={styles.mobileBreak} />
                    материалов
                  </b>
                </div>
              </div>
              <div className={styles.listmargin}>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная резка и раскрой металла
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Кожа. Лазерная резка и гравировка
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Дерево, фанера. Лазерная резка и гравировка
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Пластик. Лазерная резка и гравировка
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Оргстекло. Лазерная резка и гравировка
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Лазерная резка поролона
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Металл. Лазерная гравировка и маркировка
                      </div>
                    </a>
                  </div>
                  <div className={styles.item}>
                    <a href="#callback" className={styles.button3}>
                      <div className={styles.text3}>
                        Стекло. Лазерная гравировка
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="#callback" className={styles.button10}>
                <b className={styles.text10}>ЗАКАЗАТЬ УСЛУГУ</b>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
