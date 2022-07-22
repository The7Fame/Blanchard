ymaps.ready(init);
function init(){
  let center = [55.75846806898367,37.60108850004083];

  let my_map = new ymaps.Map("map",
    {
      center: center,
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
      autoFitToViewport: 'always',
    },
    {
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "280px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );

  let newPlacemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -5]
  });

  my_map.geoObjects.add(newPlacemark);
  my_map.behaviors.disable(['scrollZoom']);
  my_map.behaviors.disable('drag');
  my_map.container.fitToViewport();
}
