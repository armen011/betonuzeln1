import { useEffect } from "react";

const FirstPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./script.js";

    const script2 = document.createElement("script");
    script2.src =
      "https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/js/common.js";

    document.head.append(script);
    document.head.append(script2);
  }, []);
  return (
    <>
      <section className="top-header">
        <div className="box-container">
          <div className="top-header__body">
            <p>
              <strong>Աշխատանքային ժամերը:</strong> երկ-շբթ 08:00-ից 19:00
            </p>

            <a href="mailto:betonuzel1@mail.ru" className="top-header__link">
              betonuzel1@mail.ru
            </a>
          </div>
        </div>
      </section>
      <header>
        <div className="box-container">
          <div className="menu-body">
            <div className="logo">
              <a href="/">
                <img src="src/img/logo/main_logo.jpg" alt="" />
              </a>
            </div>

            <nav>
              <a href="/details" className="menu-main__item">
                Բետոնի արտադրություն
              </a>
              <a href="/services" className="menu-main__item">
                Ծառայություններ
              </a>
            </nav>
            <div className="menu-main__addresses">
              <p style={{ fontSize: "16px" }}>
                <strong style={{ fontSize: "16px" }}>Գ Ծովագյուղ</strong>, Փ1
                Ն1/1
              </p>
            </div>
            <div className="menu-main__links">
              <div className="links_phones">
                <a href="viber://chat?number=+37495003600" target="_blank">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/viber_icon.svg"
                    alt=""
                  />
                </a>
                <a href="whatsapp://send/?phone=+37495003600" target="_blank">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/whatsapp_icon.svg"
                    alt=""
                  />
                </a>
                <a href="tel:+37495003600" rel="nofollow">
                  +374 95 00-36-00
                </a>
              </div>
            </div>

            <span className="header__button-menu">
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>

        <div className="header__mobile">
          <span className="header__mobile-close">
            <i className="fas fa-times"></i>
          </span>
          <div className="header__nav_mobile">
            <ul id="menu-glavnoe-menyu-mob" className="header__nav_item_mobile">
              <li
                id="menu-item-298"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-298"
              >
                <a href="/">Գլխավոր էջ</a>
              </li>
            </ul>
            <ul id="menu-glavnoe-menyu-mob" className="header__nav_item_mobile">
              <li
                id="menu-item-298"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-298"
              >
                <a href="/details">Բետոնի արտադրություն</a>
              </li>
            </ul>
            <ul id="menu-glavnoe-menyu-mob" className="header__nav_item_mobile">
              <li
                id="menu-item-298"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-298"
              >
                <a href="/services">Ծառայություններ</a>
              </li>
            </ul>
            <div className="links_phones">
              <a href="viber://chat?number=+37495003600">
                <img
                  src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/viber_icon.svg"
                  alt=""
                />
              </a>
              <a href="whatsapp://send/?phone=+37495003600">
                <img
                  src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/whatsapp_icon.svg"
                  alt=""
                />
              </a>
              <a href="tel:+37495003600" rel="nofollow">
                +374 95 00-36-00
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="main-section">
        <div className="mask"></div>
        <div className="box-container">
          <div className="main-section__body">
            <div className="main-section__title">
              <h1>Բետոն</h1>
              <a href="tel:+37495003600" className="custom_btn">
                Զանգահարել
              </a>
            </div>
            <div className="main-section__pulse">
              <span className="pulse__text">
                Գինը սկսած <br />
                <span className="pulse__price">30000+ԱԱՀ</span> <br />
                Դրամ/մ³
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="products-services">
        <div className="box-container">
          <div className="products-services__body">
            <div className="products-services__row row__column">
              <div className="products-services__text">
                <div className="text__title">
                  <p>Բետոնային արտադրանք և ծառայություններ «ԲԵՏՈՆ №1» ՍՊԸ</p>
                </div>
                <div className="text__info_mod">
                  <a href="/details" className="text__info">
                    <img
                      src="/wp-content/themes/maintheme/img/icon-beton.svg"
                      alt=""
                    />
                    <p>Բետոնի արտադրություն</p>
                  </a>
                  <p className="text__mod_hide">
                    Բետոնի արտադրություն և մատակարարում
                  </p>
                </div>
                <div className="text__desc">
                  <p>
                    «ԲԵՏՈՆ ՈՒԶԵԼ ԱՌԱՋԻՆ» արտադրամասը, 150 մ³/ժամ հզորությամբ,
                    արտադրում է բետոնային խառնուրդներ՝ օգտագործելով սեփական
                    հումքը: Մենք երաշխավորում ենք բարձր որակ և անհատական
                    մոտեցում յուրաքանչյուր հաճախորդի։
                  </p>
                  <p>
                    Բետոնի մատակարարումը իրականացվում է մեր սեփական ավտոպարկի
                    միջոցով, որն ունի ավելի քան 30 միավոր հատուկ տեխնիկա: Այն
                    ապահովում է ժամանակին ու անվտանգ բետոնի մատակարարում
                    ցանկացած շինարարական օբյեկտ: Բացի այդ, «ԲԵՏՈՆ ՈՒԶԵԼ
                    ԱՌԱՋԻՆ»-ը նաև տրամադրում է ավտոբետոնապոմպի ծառայություններ՝
                    ավելացնելով մատակարարումների հարմարավետությունը և
                    արագությունը:
                  </p>
                </div>
              </div>

              <div className="products-services__crimea-map">
                <img src="src/img/background.jpg" alt="" />
                <div className="crimea-map__count">
                  <p>150</p>
                  <span>
                    մ³/ժ — <br />
                    արտադրամասի <br />
                    հզորություն
                  </span>
                </div>

                <div className="crimea-map__count count2">
                  <p>25</p>
                  <span>
                    միավորներ <br />
                    տեխնիկայի
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trust">
        <div className="box-container">
          <div className="trust__title title">
            <p>Ինչու են մեզ վստահում</p>
          </div>
          <div className="slider">
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img1.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>100% որակ</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Յուրաքանչյուր բետոնի խառնուրդ փորձարկվում է ամրության
                      համար հավատարմագրված լաբորատորիայում։ Մենք տրամադրում ենք
                      փորձարկման արձանագրություն յուրաքանչյուր հաճախորդին։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img2.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>Լավագույն գին</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Մենք առաջարկում ենք բարձրորակ բետոն լավագույն գնով։
                      Օգտագործում ենք սեփական հումքը՝ առանց միջնորդների և
                      հավելավճարների, ինչի շնորհիվ մեր գները միշտ մատչելի են։
                      Պատվիրեք վստահությամբ՝ որակն ու հուսալիությունը
                      երաշխավորված են։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img3.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>Սեփական հատուկ տեխնիկայի ավտոպարկ</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Մեր ավտոպարկում կա ավելի քան 25 միավոր հատուկ տեխնիկա՝
                      բետոնախառնիչներ, ինքնաթափեր, բետոնապոմպեր։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img4.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>Պահպանում ենք ժամկետները</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Ապահովում ենք բետոնի ժամանակին մատակարարումը շինարարական
                      օբյեկտներին։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img5.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>Արտադրողի երաշխիք</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Երաշխավորում ենք բետոնախառնվածքի որակը՝ պահպանելով
                      դրոշմված նորմերը բետոնի տեղադրման և խնամքի պայմաններում։
                      Ամեն մի խառնուրդ ուղեկցվում է որակի անձնագրով։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <div className="trust__box">
                <div className="box_bg-img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2021/07/trust_img6.jpg"
                    alt=""
                  />
                </div>
                <div className="box__check_img">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/index/check.svg"
                    alt=""
                  />
                </div>
                <div className="box__text">
                  <div className="box__text-title">
                    <p>Անհատական մոտեցում</p>
                  </div>
                  <div className="box__text-desc">
                    <p>
                      Արտադրում և մատակարարում ենք բետոն օրվա ցանկացած պահին՝
                      համապատասխանելով ձեր արտադրական պահանջներին։
                    </p>
                  </div>
                  <div className="box__text_blur"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="box-container">
          <div className="services__title title">
            <p>
              «ԲԵՏՈՆ №1» արտադրամասը մատուցում է որակյալ բետոնի մատակարարում և
              ծառայություններ Հայաստանի տարբեր ոլորտներում գործող
              ընկերություններին՝ ապահովելով արագություն, հուսալիություն և բարձր
              որակ։
            </p>
          </div>

          <div className="services__slider">
            <div className="slider__item">
              <div className="item__box">
                <img
                  src="src/img/karusel/1.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="slider__item">
              <div className="item__box">
                <img
                  src="src/img/karusel/1.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="slider__item">
              <div className="item__box">
                <img
                  src="src/img/karusel/3.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="slider__item">
              <div className="item__box">
                <img
                  src="src/img/karusel/4.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="slider__item">
              <div className="item__box">
                <img
                  src="src/img/karusel/5.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="contacts__map" id="contacts__map"></div>

        <div className="box-container">
          <div className="masonry">
            <img
              src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/forma_top_icon.svg"
              alt=""
            />
            <ul className="tabs">
              <li>
                <a href="#tab1">Գ Ծովագյուղ, Փ1 Ն1/1</a>
              </li>
            </ul>
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <div className="tab_content__links">
                  <a href="viber://chat?number=+37495003600">
                    <img
                      src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/viber_icon.svg"
                      alt=""
                    />
                  </a>
                  <a href="whatsapp://send/?phone=+37495003600">
                    <img
                      src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/whatsapp_icon.svg"
                      alt=""
                    />
                  </a>
                  <div className="links_tel">
                    <a href="tel:+37495003600" rel="nofollow">
                      +374 95 00-36-00
                    </a>
                  </div>
                </div>
                <div className="tab_content__address-email">
                  <div className="address-email address">
                    <h4>Հասցեն:</h4>
                    <p>Գ Ծովագյուղ, Փ1 Ն1/1</p>
                  </div>
                  <div className="address-email email">
                    <h4>Email:</h4>
                    <a href="mailto:betonuzel1@mail.ru">betonuzel1@mail.ru</a>
                  </div>
                </div>
                <a href="#modal-callback" className="fancybox custom_btn">
                  Պատվիրել Զանգ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="box-container">
          <div className="footer__wrapper">
            <div className="footer__box">
              <div className="box__title">
                <p>Կայքի քարտեզ</p>
              </div>
              <ul id="menu-futer-menyu-1" className="menu">
                <li
                  id="menu-item-305"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-305"
                >
                  <a href="/">Ընկերության մասին</a>
                </li>
              </ul>
            </div>

            <div className="footer__box">
              <div className="box__title">
                <p>Արտադրանք և ծառայություններ</p>
              </div>
              <ul id="menu-futer-menyu-2" className="menu">
                <li
                  id="menu-item-310"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-310"
                >
                  <a href="/details">Բետոնի արտադրություն</a>
                </li>
                <li
                  id="menu-item-311"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-311"
                >
                  <a href="/services">Ծառայություններ</a>
                </li>
              </ul>
            </div>

            <div className="footer__box">
              <div className="box__title">
                <p>Կոնտակտներ</p>
              </div>
              <div className="links_phones">
                <a href="viber://chat?number=+37495003600">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/viber_icon.svg"
                    alt=""
                  />
                </a>
                <a href="whatsapp://send/?phone=+37495003600">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/whatsapp_icon.svg"
                    alt=""
                  />
                </a>
                <a href="tel:+37495003600" rel="nofollow">
                  +374 95 00-36-00
                </a>
              </div>
              <div className="addreses">
                <p style={{ fontSize: "16px" }}>
                  <strong style={{ fontSize: "16px" }}>Գ Ծովագյուղ</strong>, Փ1
                  Ն1/1
                </p>
              </div>

              <a href="mailto:betonuzel1@mail.ru">betonuzel1@mail.ru</a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="box-container">
            <div className="footer_bottom__wrapper">
              <a href="/privacy-policy/">Политика кониденциальности</a>

              <p>Simferopol © Copyright 2025</p>

              <p>
                Сделано в
                <a href="https://sheer82.ru/" target="_blank">
                  <img
                    src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/sheer.svg"
                    alt=""
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FirstPage;
