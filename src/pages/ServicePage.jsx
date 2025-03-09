import { useEffect } from "react";

const ServicePage = () => {
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
      <section class="top-header">
        <div class="box-container">
          <div class="top-header__body">
            <p>
              <strong>Աշխատանքային ժամերը:</strong> երկ-շբթ 08:00-ից 19:00
            </p>

            <a href="mailto:betonuzel1@mail.ru" class="top-header__link">
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
                <img src="/img/logo/main_logo.jpg" alt="" />
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
      <section class="services-page">
        <div class="box-container">
          <div class="services__title">
            <p>
              <span>«ԲԵՏՈՆ ՈՒԶԵԼ ԱՌԱՋԻՆ» ՍՊԸ-ն</span> առաջարկում է հետևյալ
              ծառայությունները Հայաստանում
            </p>
          </div>

          <div class="services__row">
            <div class="service-b">
              <img class="service-b__img" src="/img/mixer.jpeg" alt="" />
              <div class="service-b__text">
                <div>
                  <p>Բետոնի առաքում </p>
                </div>
                <ul>
                  <li>*Արժեքը պարզեք մենեջերի հետ</li>
                </ul>
                <a href="tel:+37495003600" class="fancybox custom_btn">
                  Զանգահարել
                </a>
              </div>
              <img
                class="border-left"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/border-left.svg"
                alt=""
              />
            </div>
            <div class="service-b">
              <img
                class="service-b__img"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2024/02/10831538-e1708351301727-768x947.jpg"
                alt=""
              />
              <div class="service-b__text">
                <div>
                  <p>Բետոնապոմպի ծառայություն։</p>
                </div>
                <ul>
                  <li>
                    Բետոնապոմպ (Բ/Ն) — <strong>3500-4000դ մ³</strong>
                  </li>
                  <li>
                    Նվազագույն Պատվերը— <strong>25 մ³</strong>
                  </li>
                </ul>
                <a href="tel:+37495003600" class="fancybox custom_btn">
                  Զանգահարել
                </a>
              </div>

              <img
                class="border-left"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/border-left.svg"
                alt=""
              />
            </div>

            <div class="service-b">
              <img
                class="service-b__img"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2024/02/jcb123-768x576.jpg"
                alt=""
              />
              <div class="service-b__text">
                <div>
                  <p>Էքսկավատոր-բեռնատարի ծառայություն։</p>
                </div>
                <p>
                  Էքսկավատոր-բեռնատարի (JCB 4CX) &#8211;{" "}
                  <strong>15000դ/Ժ</strong>
                </p>
                <p>
                  Նվազագույն Պատվերը &#8211; <strong>2Ժ</strong>
                </p>

                <a href="tel:+37495003600" class="fancybox custom_btn">
                  Զանգահարել
                </a>
              </div>
              <img
                class="border-left"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/border-left.svg"
                alt=""
              />
            </div>
            <div class="service-b">
              <img
                class="service-b__img"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/uploads/2024/02/sdl-768x576.jpg"
                alt=""
              />
              <div class="service-b__text">
                <div>
                  <p>Թրթուռավոր (Hundai-HX300SL)</p>
                </div>
                <p>
                  Թրթուռավոր (Hundai-HX300SL) <sup></sup>&#8211;{" "}
                  <strong>21000դ/Ժ+ԱԱՀ</strong>
                </p>
                <p>
                  Նվազագույն Պատվերը &#8211; <strong>2Ժ</strong>
                </p>

                <a href="tel:+37495003600" class="fancybox custom_btn">
                  Զանգահարել
                </a>
              </div>
              <img
                class="border-left"
                src="https://xn----7sbccdqe8diqtag.xn--p1ai/wp-content/themes/maintheme/img/svg/border-left.svg"
                alt=""
              />
            </div>
          </div>

          <div class="services__title title-width">
            <p>Ի՞նչու են հաճախորդները ընտրում մեզ</p>
          </div>
          <div class="services__row">
            <div class="services__textarea">
              <p>
                {" "}
                «ԲԵՏՈՆ ՈՒԶԵԼ ԱՌԱՋԻՆ» արտադրամասը, 150 մ³/ժամ հզորությամբ,
                արտադրում է բետոնային խառնուրդներ՝ օգտագործելով սեփական հումքը:
                Մենք երաշխավորում ենք բարձր որակ և անհատական մոտեցում
                յուրաքանչյուր հաճախորդի։
              </p>
              <p>
                Բետոնի մատակարարումը իրականացվում է մեր սեփական ավտոպարկի
                միջոցով, որն ունի ավելի քան 30 միավոր հատուկ տեխնիկա: Այն
                ապահովում է ժամանակին ու անվտանգ բետոնի մատակարարում ցանկացած
                շինարարական օբյեկտ: Բացի այդ, «ԲԵՏՈՆ ՈՒԶԵԼ ԱՌԱՋԻՆ» ը նաև
                տրամադրում է ավտոբետոնապոմպի ծառայություններ՝ ավելացնելով
                մատակարարումների հարմարավետությունը և արագությունը:
              </p>
              <p>
                Բետոնն ու լուծույթները պատրաստում ենք ճշգրիտ չափումներով և
                առաքում ենք ժամանակին ու 24/7՝ ձեր հայտի համաձայն:
              </p>
            </div>

            <div class="slider-box">
              <div class="slider-big">
                <div class="slider__item">
                  <img src="/img/slider_img/1.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/2.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/3.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/4.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/5.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/6.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/7.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/8.jpeg" alt="" />
                </div>
              </div>

              <div class="slider-small">
                <div class="slider__item">
                  <img src="/img/slider_img/1.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/2.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/3.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/4.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/5.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/6.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/7.jpeg" alt="" />
                </div>
                <div class="slider__item">
                  <img src="/img/slider_img/8.jpeg" alt="" />
                </div>
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

export default ServicePage;
