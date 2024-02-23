/**
 * types: "cross" || "out" || "info"
 */

const markerProps = [
  {
    type: "cross",
    coordinates: [34.419220034364585, 53.2123003375276],
    imageSrc: "./images/1.png",
    title: "Разворот на перекрестке",
    subtitle: "В любом направлении"
  },
  {
    type: "out",
    coordinates: [34.42245640765331, 53.21135980166419],
    imageSrc: "./images/2.png",
    title: "Разворот вне перекрестка",
    subtitle: "Возле магазина «пятерочка»"
  },
  {
    type: "out",
    coordinates: [34.417736295862184, 53.20948032911085],
    imageSrc: "./images/3.png",
    title: "Разворот вне перекрестка",
    subtitle: "На КБ (в направлении к Московскому проспекту)"
  },
];

const MAP_CONFIG = [
  {
    tags: {
      any: ["outdoor", "park", "cemetery", "medical"],
    },
    elements: "label",
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: "poi",
      none: ["outdoor", "park", "cemetery", "medical"],
    },
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: "road",
    },
    types: "point",
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: ["food_and_drink", "shopping", "commercial_services"],
    },
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: ["traffic_light"],
    },
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: ["entrance"],
    },
    stylers: {
      visibility: "off",
    },
  },
  {
    tags: {
      any: ["road"],
      none: [
        "road_1",
        "road_2",
        "road_3",
        "road_4",
        "road_5",
        "road_6",
        "road_7",
      ],
    },
    elements: "label.icon",
    stylers: {
      visibility: "off",
    },
  },
];

async function initMap() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapListener,
    YMapMarker,
    YMapDefaultFeaturesLayer,
  } = ymaps3;

  const RESTRICT_AREA = [
    [34.35439542589075, 53.18477288552376],
    [34.48810818751897, 53.23429073682589],
  ];

  const map = new YMap(document.getElementById("app"), {
    location: {
      bounds: RESTRICT_AREA,
    },
    restrictMapArea: RESTRICT_AREA,
    zoomRange: { min: 14, max: 20 },
  });

  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: MAP_CONFIG,
    })
  );

  map.addChild(new YMapDefaultFeaturesLayer({}));

  const onClickListenerHandler = (object, event) => {
    console.log(event?.coordinates);
    const popUp = document.getElementById("popup");
    popUp.style.bottom = "-100%";
  };

  const listener = new YMapListener({
    onClick: onClickListenerHandler,
  });

  document.getElementById("popup_header_closer_container").addEventListener("click", onClickListenerHandler)

  map.addChild(listener);

  markerProps.forEach((markerProp) => {
    const markerElement = document.createElement("img");
    markerElement.className = "icon-marker";

    switch (markerProp.type) {
      case 'cross': markerElement.src = './icons/cross.svg'; break;
      case 'out': markerElement.src = './icons/out.svg'; break;
      default: markerElement.src = './icons/info.svg'; break;
    }


    markerElement.onclick = (e) => {
      e.stopPropagation();

      const popUp = document.getElementById("popup");
      // switch (markerProp.type) {
      //   case 'cross': popUp.style.background = "#DDFFCE"; break;
      //   case 'out': popUp.style.background = "#FFFACE"; break;
      //   default: popUp.style.background = "#E6E7FF"; break;
      // }

      popUp.style.bottom = "0";
      const img = document.getElementById("popup_image");
      img.setAttribute("src", markerProp.imageSrc);

      const text = document.getElementById("popup_header_text");
      text.innerText = markerProp.title;

      const subtitle = document.getElementById("popup_subtitle");
      subtitle.innerText = markerProp.subtitle;
    };
    map.addChild(
      new YMapMarker({ coordinates: markerProp.coordinates }, markerElement)
    );
  });
}

initMap();
