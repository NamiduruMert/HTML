$(function () {
  var minPrice = 375;
  var maxPrice = 4000;

  // Fiyat aralığı belirleme çubuğunu oluşturun
  $("#price-range").slider({
    range: true,
    min: minPrice,
    max: maxPrice,
    values: [minPrice, maxPrice],
    slide: function (event, ui) {
      // Fiyat aralığını güncelleyin
      $("#min-price").text(ui.values[0] + " TL");
      $("#max-price").text(ui.values[1] + " TL");
    },
  });

  // Başlangıç ​​fiyat aralığını gösterin
  $("#min-price").text(minPrice + " TL");
  $("#max-price").text(maxPrice + " TL");
});
