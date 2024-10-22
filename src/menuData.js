import breakfastImg from './assets/breakfast.png';
import saladsImg from './assets/salads.png';
import appetizerImg from './assets/appetizer.png';
import homemadeImg from './assets/homemade.png';
import meatImg from './assets/meat.png';
import fishImg from './assets/fish.png';
import colaIconImg from './assets/cola-icon.png';
import alcoholicDrinksImg from './assets/alcoholic-drinks.png';


export const menuData = [
    {
        category: "Доручек",
        img: breakfastImg,
        items: [
            {
                name: "Телешка чорба",
                description: "(телешки мускул,брашно,морков,кромид)",
                price: "140"
            },
            {
                name: "Шкембе чорба",
                description: "(шкембе,брашно,кромид)",
                price: "140"
            },
            {
                name: "Омлет со шунка и кашкавал",
                description: "(jајца,шунка,кашкавал)",
                price: "120"
            },
            {
                name: "Омлет со сланина",
                description: "(jајца,шунка,кашкавал,сланина)",
                price: "140"
            },
        ]
    },
    {
        category: "Салати",
        img: saladsImg,
        items: [
            {
                name: "Шопска салата",
                description: "(домат,краставица,кромид ,кравјо сирење)",
                price: "140"
            },
            {
                name: "Македонска салата",
                description: "(домат,кромид,пиперка,магдонос)",
                price: "150"
            },
            {
                name: "Грчка салата",
                description: "(домат,краставица,маслинка,оригано,кромид)",
                price: "160"
            },
            {
                name: "Витаминска салата",
                description: "(зелка,морков,цвекло)",
                price: "120"
            },
            {
                name: "Мешана салата",
                description: "(домат,краставица,зелка)",
                price: "120"
            },
            {
                name: "Таратур",
                description: "(краставица, павлака)",
                price: "140"
            },
        ]
    },
    {
        category: "Топли предјадења",
        img: appetizerImg,
        items: [
            {
                name: "Зденка похована",
                price: "парче/40",
            },
            {
                name: "Пирошка",
                price: "парче/80",
            },
            {
                name: "Сирење на скара кравјо",
                price: "120",
            },
            {
                name: "Сирење на скара со сланина",
                description: "(кравјо сирење,сланина)",
                price: "140",
            },
            {
                name: "Тиквици на скара",
                price: "100"
            },
            {
                name: "Тиквици поховани",
                price: "140"
            },
            {
                name: "Помфрит мал/голем",
                price: "80/100"
            },
            {
                name: "Помфрит со сирење мал/голем",
                price: "100/120"
            },
        ]
    },
    {
        category: "Готвени предјадења",
        img: homemadeImg,
        items: [
            {
                name: "Грав",
                price: "1кг/300",
            },
            {
                name: "Ориз",
                price: "1кг/300",
            },
            {
                name: "Ориз со спанаќ",
                price: "1кг/300",
            },
            {
                name: "Полнети пиперки",description: "(ориз, мелено месо, кромид)",
                price: "1кг/500",
            },
            {
                name: "Турлитава",
                description: "(грав, боранија, грашок, компир, морков, модар патлиџан, тиквица, пиперка)",
                price: "1кг/300"
            },
            {
                name: "Мусака",
                description: "(компир, мелено месо, кромид)",
                price: "1кг/500"
            },
            {
                name: "Пилешко со зеленчук",description: "(стек, брокула, морков, тиквица, модар патлиџан)",
                price: "1кг/600"
            },
            {
                name: "Макарони",
                description: "(макарони, сирење, јајца, млеко, хопла)",
                price: "1кг/300"
            },
        ]
    },
    {
        category: "Скара",
        img: meatImg,
        items: [
            {
                name: "Кебап",
                price: "парче/16"
            },
            {
                name: "Кобасица",
                price: "парче/70"
            },
            {
                name: "Сланина",
                price: "парче/150"
            },
            {
                name: "Уштипак",
                price: "парче/60"
            },
            {
                name: "Телешки Џигер",
                price: "1кг/300"
            },
            {
                name: "Батак без коска",
                price: "1кг/600"
            },
            {
                name: "Стек на скара",
                price: "1кг/600"
            },
            {
                name: "Похован стек",
                description: "(пилешко месо,јајца,брашно,презла)",
                price: "1кг/600"
            },
            {
                name: "Ражнич пилешки/свински 1кг.",
                price: "600/700"
            },
            {
                name: "Пилешки/свински увијач 1кг",
                description: "(пилешки стек/свинско,кашкавал,сланина)",
                price: "600/800"
            },
            {
                name: "Свинско ребро",
                price: "1кг/800"
            },
            {
                name: "Плескавица",
                price: "100"
            },
            {
                name: "Шарска плескавица 200гр",
                description: "(мелено месо,кашкавал)",
                price: "200"
            },
            {
                name: "Гурманска плескавица",
                description: "(мелено месо,пиперка,кашкавал,сланина)",
                price: "260"
            }
        ]
    },
    {
        category: "Риба",
        img: fishImg,
        items: [
            {
                name: "Ослич без коска ",
                price: "1кг/400"
            },
            {
                name: "Ослич со коска",
                price: "1кг/350"
            },
            {
                name: "Скуша",
                price: "1кг/400"
            },
            {
                name: "Пастрмка црвена",
                price: "1кг/600"
            },
            {
                name: "Пастрмка бела",
                price: "1кг/550"
            },
            {
                name: "Шкрапина",
                price: "1кг/600"
            },
            {
                name: "Панга",
                price: "1кг/600"
            }
        ]
    },
    {
        category: "Безалкохолни пијалоци",
        img: colaIconImg,
        items: [
            {
                name: "Кисела вода Пелистерка 1л.",
                price: "80"
            },
            {
                name: "Кисела вода 0.5мл",
                price: "40"
            },
            {
                name: "Кока Кола 0.33мл",
                price: "70"
            },
            {
                name: "Фанта 0.33мл",
                price: "70"
            },
            {
                name: "Швепс 0.33мл",
                price: "70"
            },
            {
                name: "Тоник 0.33мл",
                price: "70"
            },
            {
                name: "Спрајт 0.33мл",
                price: "70"
            },
            {
                name: "Густи сок некст 0.33мл",
                description: "(портокал, праска)",
                price: "80"
            }
        ]
    },
    {
        category: "Aлкохолни пијалоци",
        img: alcoholicDrinksImg,
        items: [
            {
                name: "Скопско 0.5/0.33",
                price: "90"
            },
            {
                name: "Скопско Смут 0.5/0.33",
                price: "90"
            },
            {
                name: "Лашко 0.5",
                price: "90"
            },
            {
                name: "Амстел 0.5",
                price: "120"
            },
            {
                name: "Хајнекен 0.5/0.33",
                price: "120"
            },
            {
                name: "Ипл",
                price: "90"
            },
            {
                name: "Бира Морети 0.5",
                price: "100"
            },
            {
                name: "Радлер 0.5",
                price: "90"
            },
            {
                name: "Смедеревка 1л",
                price: "320"
            },
            {
                name: "Темјаника 0.7мл",
                price: "600"
            },
            {
                name: "Траминец 0.7мл",
                price: "600"
            },
            {
                name: "Александрија бело 0.7мл",
                price: "600"
            },
            {
                name: "Вранец 1л",
                price: "320"
            },
            {
                name: "Македонско црвено 1л",
                price: "320"
            },
            {
                name: "Александрија црвено",
                price: "600"
            },
            {
                name: "Т'га за југ црвено 0.7мл",
                price: "600"
            },
            {
                name: "Тиквешка жолта ракија ЛР",
                price: "70"
            },
            {
                name: "Тиквешка бела ракија ЛР",
                price: "70"
            },
            {
                name: "Узо 12",
                price: "80"
            },
            {
                name: "Узо плумари",
                price: "100"
            },
            {
                name: "Мастика",
                price: "70"
            },
            {
                name: "Коњак",
                price: "60"
            },
            {
                name: "Пелинковец",
                price: "70"
            },
            {
                name: "Вотка вигор",
                price: "70"
            },
            {
                name: "Вотка смирноф",
                price: "100"
            },
            {
                name: "Вотка фаландија",
                price: "100"
            },
            {
                name: "Џин сах",
                price: "70"
            },
            {
                name: "Џин гордонс",
                price: "100"
            },
            {
                name: "Виски Џејмисон",
                price: "180"
            },
            {
                name: "Виски Џек Даниелс",
                price: "200"
            },
            {
                name: "Виски Чивас",
                price: "220"
            },
            {
                name: "Виски Џони",
                price: "150"
            },
            {
                name: "Виски Џб",
                price: "150"
            },
        ]
    }
];