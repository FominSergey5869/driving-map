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
  {
    type: "cross",
    coordinates: [34.41815840194931, 53.20982814795147],
    imageSrc: "./images/4.png",
    title: "Разворот на перекрестке",
    subtitle: "Слева магнит (в направлении от Московского проспекта)"
  },
  {
    type: "cross",
    coordinates: [34.41740384284099, 53.20876904728664],
    imageSrc: "./images/5.png",
    title: "Разворот на перекрестке",
    subtitle: "Возле магазина канцтоваров"
  },
  {
    type: "cross",
    coordinates: [34.416461493937874, 53.20756084560307],
    imageSrc: "./images/6.png",
    title: "Разворот на перекрестке",
    subtitle: "В направлении к Московскому проспекту"
  },
  {
    type: "cross",
    coordinates: [34.41537902059388, 53.2043551806003],
    imageSrc: "./images/7.png",
    title: "Разворот на перекрестке",
    subtitle: "Пересечение Дзержинского и Севской (можно разворачиваться с любой стороны)"
  },
  {
    type: "cross",
    coordinates: [34.41557660483531, 53.20282670816007],
    imageSrc: "./images/8.png",
    title: "Разворот на перекрестке",
    subtitle: "Перед заправкой Нефтика (в направлении от Московского проспекта)"
  },
  {
    type: "out",
    coordinates: [34.41595336818706, 53.20004757922135],
    imageSrc: "./images/9.png",
    title: "Разворот вне перекрестка",
    subtitle: "Серые ворота"
  },
  {
    type: "out",
    coordinates: [34.41583826718641, 53.199704941273],
    imageSrc: "./images/10.png",
    title: "Разворот вне перекрестка",
    subtitle: "Магазин возле серых ворот"
  },
  {
    type: "cross",
    coordinates: [34.4177884305739, 53.19582843038112],
    imageSrc: "./images/11.png",
    title: "Разворот на перекрестке",
    subtitle: "Зеленый дом в самом конце улицы (в направлении от Московского проспекта)"
  },
  {
    type: "out",
    coordinates: [34.421378197392904, 53.19679227130142],
    imageSrc: "./images/12.png",
    title: "Разворот вне перекрестка",
    subtitle: "Заезжаем к гаражу (разворот с задним ходом)"
  },
  {
    type: "cross",
    coordinates: [34.423512059772676, 53.197081982996266],
    imageSrc: "./images/13.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "out",
    coordinates: [34.42374767497391, 53.197341500718025],
    imageSrc: "./images/14.png",
    title: "Разворот вне перекрестка",
    subtitle: "Магазин «Кавказ»"
  },
  {
    type: "cross",
    coordinates: [34.423793781501644, 53.19624568683898],
    imageSrc: "./images/15.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "cross",
    coordinates: [34.43658200977811, 53.19822632763635],
    imageSrc: "./images/16.png",
    title: "Разворот на перекрестке",
    subtitle: "Берем правее по возможности"
  },
  {
    type: "out",
    coordinates: [34.4375802525596, 53.198895911846144],
    imageSrc: "",
    title: "Разворот вне перекрестка",
    subtitle: "Заезжаем на парковку маршруток"
  },
  {
    type: "out",
    coordinates: [34.41265375067947, 53.208523046483776],
    imageSrc: "./images/17.png",
    title: "Разворот вне перекрестка",
    subtitle: "В направлении от Дзержинского (с задним ходом)"
  },
  {
    type: "cross",
    coordinates: [34.41206520917094, 53.208692162424384],
    imageSrc: "./images/18.png",
    title: "Разворот на перекрестке",
    subtitle: "В направлении от Дзержинского перед парком"
  },
  {
    type: "cross",
    coordinates: [34.41111187489044, 53.208945599147775],
    imageSrc: "./images/19.png",
    title: "Разворот на перекрестке",
    subtitle: "В направлении от Дзержинского в самом конце"
  },
  {
    type: "cross",
    coordinates: [34.42067896000855, 53.21452245242548],
    imageSrc: "./images/20.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "cross",
    coordinates: [34.41697309337147, 53.21525272600095],
    imageSrc: "./images/21.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "out",
    coordinates: [34.42932853235626, 53.2121868963933],
    imageSrc: "./images/22.png",
    title: "Разворот вне перекрестка",
    subtitle: "Между дикси и домом, к воротам (в направлении к Московскому проспекту)"
  },
  {
    type: "out",
    coordinates: [34.427608483989175, 53.20775410799812],
    imageSrc: "./images/23.png",
    title: "Разворот вне перекрестка",
    subtitle: "Станция с водой (в направлении к Московскому проспекту)"
  },
  {
    type: "cross",
    coordinates: [34.42751759820555, 53.20730122050367],
    imageSrc: "./images/24.png",
    title: "Разворот на перекрестке",
    subtitle: "Магазин «Корзинка»"
  },
  {
    type: "out",
    coordinates: [34.42668001115473, 53.205579349416006],
    imageSrc: "./images/25.png",
    title: "Разворот вне перекрестка",
    subtitle: "Автозапчасти"
  },
  {
    type: "out",
    coordinates: [34.42224929997325, 53.20395751879258],
    imageSrc: "./images/26.png",
    title: "Разворот вне перекрестка",
    subtitle: "На кб или перед ним"
  },
  {
    type: "cross",
    coordinates: [34.43246882460008, 53.20953412250266],
    imageSrc: "./images/27.png",
    title: "Разворот на перекрестке",
    subtitle: "т-образный перекресток (с улицы Котовского)"
  },
  {
    type: "out",
    coordinates: [34.43183156211108, 53.20954942541585],
    imageSrc: "./images/28.png",
    title: "Разворот вне перекрестка",
    subtitle: "Пожарная часть"
  },
  {
    type: "out",
    coordinates: [34.43832785092125, 53.2099757593287],
    imageSrc: "./images/29.png",
    title: "Разворот вне перекрестка",
    subtitle: "По направлению от Московского"
  },
  {
    type: "out",
    coordinates: [34.45481964848556, 53.20516446637319],
    imageSrc: "./images/30.png",
    title: "Разворот вне перекрестка",
    subtitle: "Заезд на парковку перед воротами"
  },
  {
    type: "cross",
    coordinates: [34.45477758428059, 53.20478501961464],
    imageSrc: "./images/31.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "info",
    coordinates: [34.44858355038775, 53.21006999649436],
    imageSrc: "",
    title: "Светофор",
    subtitle: "На светофоре останавливаться перед дублером"
  },
  {
    type: "info",
    coordinates: [34.4474596899315, 53.20863271173672],
    imageSrc: "",
    title: "Конец одностороннего движения",
    subtitle: "Дальняя траектория при развороте"
  },
  {
    type: "out",
    coordinates: [34.43752043349041, 53.214655542450885],
    imageSrc: "./images/32.png",
    title: "Разворот вне перекрестка",
    subtitle: "«Мелькрукк» разворот с любой стороны"
  },
  {
    type: "cross",
    coordinates: [34.439554954548484, 53.21858337663797],
    imageSrc: "./images/33.png",
    title: "Разворот на перекрестке",
    subtitle: "Заправка «Триада»"
  },
  {
    type: "cross",
    coordinates: [34.43803320078801, 53.22182469105664],
    imageSrc: "./images/34.png",
    title: "Разворот на перекрестке",
    subtitle: "В направлении к МРЭО"
  },
  {
    type: "cross",
    coordinates: [34.43418417276144, 53.22229317838511],
    imageSrc: "./images/35.png",
    title: "Разворот на перекрестке",
    subtitle: "В направлении к МРЭО"
  },
  {
    type: "out",
    coordinates: [34.43293674119957, 53.22243738076615],
    imageSrc: "./images/36.png",
    title: "Разворот вне перекрестка",
    subtitle: "Ориентир – плакаты, с любой стороны"
  },
  {
    type: "out",
    coordinates: [34.42557180661191, 53.22098337751045],
    imageSrc: "./images/37.png",
    title: "Разворот вне перекрестка",
    subtitle: "С любой стороны"
  },
  {
    type: "info",
    coordinates: [34.409063715925, 53.2168077914357],
    imageSrc: "",
    title: "Знак “Движение без остановки запрещено”",
    subtitle: "Останавливаемся у края проезжей части"
  },
  {
    type: "cross",
    coordinates: [34.409349033334806, 53.21763431422053],
    imageSrc: "./images/38.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "out",
    coordinates: [34.40597115033748, 53.218143166623896],
    imageSrc: "./images/39.png",
    title: "Разворот вне перекрестка",
    subtitle: "Ворота детского сада (задний ход)"
  },
  {
    type: "cross",
    coordinates: [34.40209987340137, 53.21882106532874],
    imageSrc: "./images/40.png",
    title: "Разворот на перекрестке",
  },
  {
    type: "info",
    coordinates: [34.401845788563435, 53.21759095394964],
    imageSrc: "",
    title: "Знак “Движение без остановки запрещено”",
  },
  {
    type: "info",
    coordinates: [34.40185438330488, 53.21727110869407],
    imageSrc: "",
    title: "Знак мтс",
    subtitle: "При повороте с Шолохова на проспект, перестраеваемся сразу, до знака “полоса для мтс”"
  },
  {
    type: "cross",
    coordinates: [34.40116871766282, 53.21561991372476],
    imageSrc: "./images/41.png",
    title: "Разворот на перекрестке",
    subtitle: "Слева аптека"
  },
  {
    type: "cross",
    coordinates: [34.40079635552974, 53.21413326798444],
    imageSrc: "./images/42.png",
    title: "Разворот на перекрестке",
    subtitle: "Держимся правее"
  },
  {
    type: "out",
    coordinates: [34.39747390283856, 53.214644703641625],
    imageSrc: "./images/43.png",
    title: "Разворот вне перекрестка",
    subtitle: "Ориентир – станция с водой"
  },
  {
    type: "out",
    coordinates: [34.39596680597866, 53.2148404065382],
    imageSrc: "./images/44.png",
    title: "Разворот вне перекрестка",
    subtitle: "Парковка у магазина"
  },
  {
    type: "out",
    coordinates: [34.394224955211776, 53.21498943391826],
    imageSrc: "./images/45.png",
    title: "Разворот вне перекрестка",
    subtitle: "Парковка у МФЦ"
  },
  {
    type: "out",
    coordinates: [34.40793395853342, 53.212281715306084],
    imageSrc: "./images/46.png",
    title: "Разворот вне перекрестка",
    subtitle: "Парковка возле лестницы жд перехода"
  },
  {
    type: "out",
    coordinates: [34.41402346616876, 53.222435978921936],
    imageSrc: "./images/47.png",
    title: "Разворот вне перекрестка",
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
      subtitle.innerText = markerProp.subtitle || "";
    };
    map.addChild(
      new YMapMarker({ coordinates: markerProp.coordinates }, markerElement)
    );
  });
}

initMap();
