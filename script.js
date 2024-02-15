const markerProps = [
  {
    coordinates: [34.42350221978595, 53.20966191052484],
    iconSrc:
      "https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png",
    message: "I'm yellow capybara!",
  },
  {
    coordinates: [34.52350221978595, 53.30966191052484],
    iconSrc:
      "https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/purple-capybara.png",
    message: "I'm purple capybara!",
  },
  {
    coordinates: [34.62350221978595, 53.40966191052484],
    iconSrc:
      "https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/green-capybara.png",
    message: "I'm green capybara!",
  },
];

const PASTE_JSON_HERE = [
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
      customization: PASTE_JSON_HERE,
    })
  );

  map.addChild(new YMapDefaultFeaturesLayer({}));

  const onClickListenerHandler = (object, event) => {
    console.log(event.coordinates);
    const popUp = document.getElementById("popup");
    popUp.style.bottom = "-100%";
  };

  const listener = new YMapListener({
    onClick: onClickListenerHandler,
  });

  map.addChild(listener);

  markerProps.forEach((markerProp) => {
    const markerElement = document.createElement("img");
    markerElement.className = "icon-marker";
    markerElement.src = markerProp.iconSrc;
    markerElement.onclick = (e) => {
      e.stopPropagation();
      const popUp = document.getElementById("popup");
      popUp.style.bottom = "30px";
      const img = document.getElementById("popup_image");
      img.setAttribute("src", markerProp.iconSrc);
      const text = document.getElementById("popup_text");
      text.innerText = markerProp.message;
    };
    map.addChild(
      new YMapMarker({ coordinates: markerProp.coordinates }, markerElement)
    );
  });
}

initMap();
