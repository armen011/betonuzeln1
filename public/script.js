(function ($) {
  createMap("contacts__map", [40.619482, 44.951064]);

  function createMap(xID, coords) {
    if ($("#" + xID + "").length > 0) {
      var myMap;
      // Дождёмся загрузки API и готовности DOM.
      ymaps.ready(init);

      function init() {
        myMap = new ymaps.Map(
          xID,
          {
            center: coords,
            zoom: 14,
            controls: ["zoomControl", "geolocationControl"],
          },
          {
            searchControlProvider: "yandex#search",
          }
        );
        // Создаём макет содержимого.
        (MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        )),
          (myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
              hintContent: "г. Cтарый крым, <br> ул Ленина 1",
              balloonContent: "г. Cтарый крым, <br> ул Ленина 1",
            },
            {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "/wp-content/themes/maintheme/img/svg/pin.svg",
              // Размеры метки.
              iconImageSize: [22, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-15, -60],
            }
          ));
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable("scrollZoom");

        $("#btn_1").click(function () {
          var position = [45.040152, 35.117687];
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [45.040152, 35.117687],
              {
                // Данные для построения диаграммы.
                balloonContent: "г. Старый Крым, <br> ул Ленина 1",
              },
              {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: "/wp-content/themes/maintheme/img/svg/pin.svg",
                // Размеры метки.
                iconImageSize: [22, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -60],
              }
            ),
            myMap.setCenter(position)
          );
        });

        $("#btn_2").click(function () {
          var position = [45.057581, 35.359073];
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [45.057581, 35.359073],
              {
                // Данные для построения диаграммы.
                balloonContent: "г. Феодосия, <br> ул Лесопарковая, д.2",
              },
              {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: "/wp-content/themes/maintheme/img/svg/pin.svg",
                // Размеры метки.
                iconImageSize: [22, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -60],
              }
            ),
            myMap.setCenter(position)
          );
        });

        $("#btn_3").click(function () {
          var position = [45.33727, 36.433334];
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [45.33727, 36.433334],
              {
                // Данные для построения диаграммы.
                balloonContent:
                  "г. Керчь , <br> Индустриальное шоссе/ул. Буденного",
              },
              {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: "/wp-content/themes/maintheme/img/svg/pin.svg",
                // Размеры метки.
                iconImageSize: [22, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -60],
              }
            ),
            myMap.setCenter(position)
          );
        });
      }
    }
  }
})(jQuery);
