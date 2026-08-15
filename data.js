/* ============================================================================
   Sa Pizza — VERİ / DATA
   ============================================================================
   Düzenlemeniz gereken tek dosya burasıdır. app.js'e dokunmayın.
   This is the only file you need to edit. Leave app.js alone.

   1) TELEFON      → CONFIG.phone. Sipariş, telefonun MESAJ uygulamasıyla bu
                     numaraya gider. / The order opens the phone's own messages
                     app with the text ready to send to this number.
   2) ÜRÜN EKLEME  → MENU listesinde her ürün TEK bir kayıttır:
      ADD PRODUCT      { id: "p999", name: { ru:"Имя", tk:"Ady" },
                         price: 12.5, image: "dosya.webp" }
   3) RESİMLER     → "uploads/" klasörüne koyun, sadece dosya adını yazın.
      IMAGES         Drop the file into uploads/, reference the file name only.
   4) BANNER       → BANNERS listesi. Boş bırakılırsa şerit hiç görünmez.
                     Leave BANNERS empty and the strip hides itself.
   ============================================================================ */

/* ==========================================================================
   1. CONFIG — düzenlemesi gereken tek yer / the only place you need to edit
   ========================================================================== */
const CONFIG = {
  // Tek numara iki işi de görür: sepetteki "SMS ile sipariş" bu numaraya
  // yazar, yanındaki "Jaň et" düğmesi de aynı numarayı arar. Burayı
  // değiştirmek ikisini birden değiştirir.
  // One number does both jobs: the SMS order in the cart is addressed here,
  // and the call button beside it dials the very same number. Changing this
  // line changes both at once.
  phone: "+99364629645",

  brand: "Sa Pizza", // üst barda görünen isim / name in the header
  currency: "m", // para birimi / currency symbol
  currencyAfter: true, // simge fiyatın sonunda mı? / symbol after the price
  deliveryFee: 10, // dostawka hyzmaty / delivery fee, added on top of the cart total
  defaultLanguage: "ru", // ru | tk | tr | en
  defaultTheme: "light", // dark | light

  // Parallax alanı / parallax hero artwork
  logo: "uploads/logo.webp",
  heroLeft: "uploads/hero-left.png",
  heroRight: "uploads/hero-right.png",

  bannerAutoplayMs: 3500, // banner kaç ms'de bir kayar / autoplay delay

  // Ziyaretçi sayacı / visit counter.
  // Sunucu yok: sayı ücretsiz bir sayaç servisinde tutulur. "name" bu
  // siteye özel olmalı — aynı adı başkası kullanırsa sayılar karışır.
  // Aynı tarayıcı 24 saatte bir kez sayılır, yani "kaç kişi açtı".
  // No server: the number lives on a free counter service. "name" must be
  // unique to this site — a shared name would mix your count with theirs.
  // One browser counts once per 24h, so it reads as "how many people".
  counter: {
    enabled: true,
    name: "sa-pizza-github-io", // benzersiz olsun / keep unique
    key: "visits",
    everyHours: 24, // 0 → her açılışı say / count every page load
  },
};

/* ==========================================================================
   2. BANNERS — kendiliğinden kayar, parmakla sürüklenebilir
                auto-scrolls, drag / swipe also works
   Resim "uploads/" klasöründen gelir. Liste boşken şerit hiç çizilmez.
   Images come from uploads/. An empty list draws no strip at all.
   ========================================================================== */
const BANNERS = [
  {
    image: "1786703241586-261010315-sm.webp",
    title: {
      ru: "Пицца из дровяной печи",
      tk: "Odun peçinde pizza",
      tr: "Taş fırında pizza",
      en: "Stone-baked pizza",
    },
    text: {
      ru: "Sa Pizza — с 2012 года",
      tk: "Sa Pizza — 2012-nji ýyldan bäri",
      tr: "Sa Pizza — 2012'den beri",
      en: "Sa Pizza — since 2012",
    },
  },
  {
    image: "1786703085887-647823669-sm.webp",
    title: {
      ru: "Мангал каждый день",
      tk: "Her gün mangalda",
      tr: "Her gün mangalda",
      en: "Fresh off the grill",
    },
    text: {
      ru: "Шашлык, люля и стейки",
      tk: "Şaşlyk, lýulýa we steýkler",
      tr: "Şiş, lüle ve stekler",
      en: "Shashlik, lule and steaks",
    },
  },
  {
    image: "1786701261220-392444195-sm.webp",
    title: {
      ru: "Донеры и бургеры",
      tk: "Döner we burgerler",
      tr: "Dönerler ve burgerler",
      en: "Doners and burgers",
    },
    text: {
      ru: "Закажите с доставкой",
      tk: "Eltip bermek bilen sargyt ediň",
      tr: "Teslimatla sipariş verin",
      en: "Order with delivery",
    },
  },
];

/* ==========================================================================
   3. LANGUAGES + UI TEXT
   Bir dili kapatmak için LANGS listesinden çıkarmanız yeterli.
   Drop a language from LANGS and it disappears from the picker.
   ========================================================================== */
const LANGS = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tk", label: "Türkmençe", flag: "🇹🇲" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const T = {
  ru: {
    tagline: "Заказ онлайн",
    welcome: "Добро пожаловать",
    cart: "Корзина",
    empty: "Корзина пуста",
    emptyHint: "Нажмите на блюдо — оно появится здесь.",
    delivery: "Доставка",
    total: "Итого",
    order: "Заказ",
    sendOrder: "Заказать по СМС",
    callNow: "Позвонить",
    clear: "Очистить корзину",
    added: "добавлено в корзину",
    item: "блюд",
    addToCart: "В корзину",
    viewCart: "Открыть корзину",
    name: "Ваше имя *",
    address: "Ваш адрес *",
    cartEmptyWarn: "Корзина пуста",
    noPhone: "Номер телефона не указан (CONFIG.phone)",
    missingInfo: "Укажите, пожалуйста, имя и адрес",
    opening: "Открываем приложение сообщений…",
    msgHello: "Здравствуйте! Хочу сделать заказ:",
    msgTotal: "Итого",
    msgName: "Имя",
    msgAddress: "Адрес",
    visitors: "посетителей",
    cartShort: "Корзина",
  },
  tk: {
    tagline: "Onlaýn sargyt",
    welcome: "Hoş geldiňiz",
    cart: "Sebedim",
    empty: "Sebediňiz boş",
    emptyHint: "Nahara basyň, şu ýere goşulýar.",
    delivery: "Eltip bermek",
    total: "Jemi",
    order: "Sargyt",
    sendOrder: "SMS bilen sargyt et",
    callNow: "Jaň et",
    clear: "Sebedi boşat",
    added: "sebede goşuldy",
    item: "nahar",
    addToCart: "Sebede goş",
    viewCart: "Sebede git",
    name: "Adyňyz *",
    address: "Salgyňyz *",
    cartEmptyWarn: "Sebediňiz boş",
    noPhone: "Telefon belgisi bellenmedi (CONFIG.phone)",
    missingInfo: "Adyňyzy we salgyňyzy giriziň",
    opening: "Habar programmasy açylýar…",
    msgHello: "Salam! Sargyt etmek isleýärin:",
    msgTotal: "Jemi",
    msgName: "Ady",
    msgAddress: "Salgy",
    visitors: "myhman",
    cartShort: "Sebet",
  },
  tr: {
    tagline: "Online sipariş",
    welcome: "Hoş geldiniz",
    cart: "Sepetim",
    empty: "Sepetiniz boş",
    emptyHint: "Bir ürüne dokunun, buraya eklenir.",
    delivery: "Teslimat",
    total: "Toplam",
    order: "Sipariş",
    sendOrder: "SMS ile sipariş ver",
    callNow: "Ara",
    clear: "Sepeti boşalt",
    added: "sepete eklendi",
    item: "ürün",
    addToCart: "Sepete ekle",
    viewCart: "Sepete git",
    name: "Adınız *",
    address: "Adresiniz *",
    cartEmptyWarn: "Sepetiniz boş",
    noPhone: "Telefon numarası tanımlı değil (CONFIG.phone)",
    missingInfo: "Lütfen adınızı ve adresinizi girin",
    opening: "Mesaj uygulaması açılıyor…",
    msgHello: "Merhaba! Sipariş vermek istiyorum:",
    msgTotal: "Toplam",
    msgName: "Ad",
    msgAddress: "Adres",
    visitors: "ziyaretçi",
    cartShort: "Sepet",
  },
  en: {
    tagline: "Order online",
    welcome: "Welcome",
    cart: "Cart",
    empty: "Your cart is empty",
    emptyHint: "Tap a dish and it lands here.",
    delivery: "Delivery",
    total: "Total",
    order: "Order",
    sendOrder: "Order by text message",
    callNow: "Call",
    clear: "Clear cart",
    added: "added to the cart",
    item: "dishes",
    addToCart: "Add to cart",
    viewCart: "Open cart",
    name: "Your name *",
    address: "Your address *",
    cartEmptyWarn: "Your cart is empty",
    noPhone: "No phone number set (CONFIG.phone)",
    missingInfo: "Please enter your name and address",
    opening: "Opening the messages app…",
    msgHello: "Hello! I would like to order:",
    msgTotal: "Total",
    msgName: "Name",
    msgAddress: "Address",
    visitors: "visitors",
    cartShort: "Cart",
  },
};

/* ==========================================================================
   4. MENU — kategoriler ve ürünler / categories and products
      Resimler "uploads/" klasöründen gelir. Images are served from uploads/.

      Buradaki her ürünün resmi vardır: resmi olmayanlar listeye hiç alınmadı,
      hepsi resimsiz kalan kategoriler de (Smuzi, Milkşeýk, Freş şireler)
      yazılmadı. Resimsiz bir ürün eklerseniz kartında 🍽️ görünür — çirkin
      durur, önce resmi "uploads/" klasörüne koyun.
      Every product here has a picture: the ones without were left out, and the
      categories where nothing had a picture (Smoothies, Milkshakes, Fresh
      Juices) were left out with them. Add a product with no image and its card
      falls back to the 🍽️ placeholder — it looks bare, so drop the picture
      into uploads/ first.
   ========================================================================== */
const MENU = [
  {
    id: "c2243",
    name: {
      ru: "Завтраки",
      tk: "Ertirlikler",
      tr: "Kahvaltı",
      en: "Breakfast",
    },
    image: "1786696536090-330041972-sm.webp",
    items: [
      {
        id: "p11465",
        name: {
          ru: "Яичница-глазунья",
          tk: "Göz ýumurtga",
          tr: "Sahanda Yumurta",
          en: "Fried Eggs",
        },
        price: 20,
        image: "1786696536090-330041972-sm.webp",
      },
      {
        id: "p11466",
        name: {
          ru: "Яичница с суджуком",
          tk: "Sujukly ýumurtga",
          tr: "Sucuklu Yumurta",
          en: "Eggs with Sujuk",
        },
        price: 25,
        image: "1786696608703-578413906-sm.webp",
      },
      {
        id: "p11467",
        name: {
          ru: "Менемен",
          tk: "Menemen",
          tr: "Menemen",
          en: "Menemen",
        },
        price: 25,
        image: "1786696619269-164562947-sm.webp",
      },
      {
        id: "p11468",
        name: {
          ru: "Яичница с сыром",
          tk: "Syrly ýumurtga",
          tr: "Peynirli Yumurta",
          en: "Eggs with Cheese",
        },
        price: 25,
        image: "1786696676959-758029928-sm.webp",
      },
      {
        id: "p11469",
        name: {
          ru: "Испанский омлет",
          tk: "Ispan omleti",
          tr: "İspanyol Omlet",
          en: "Spanish Omelette",
        },
        price: 25,
        image: "1786696685771-218194172-sm.webp",
      },
      {
        id: "p11470",
        name: {
          ru: "Яичница с фаршем",
          tk: "Farşly ýumurtga",
          tr: "Kıymalı Yumurta",
          en: "Eggs with Minced Meat",
        },
        price: 30,
        image: "1786696696861-55590998-sm.webp",
      },
      {
        id: "p11471",
        name: {
          ru: "Микс тост",
          tk: "Miks tost",
          tr: "Karışık Tost",
          en: "Mixed Toast",
        },
        price: 25,
        image: "1786696733492-297476838-sm.webp",
      },
      {
        id: "p11472",
        name: {
          ru: "Клубный сэндвич",
          tk: "Klub sendwiç",
          tr: "Club Sandviç",
          en: "Club Sandwich",
        },
        price: 35,
        image: "1786696765894-877097769-sm.webp",
      },
      {
        id: "p11473",
        name: {
          ru: "Блинчики простые",
          tk: "Blinçik sada",
          tr: "Sade Krep",
          en: "Plain Crepes",
        },
        price: 10,
        image: "1786696833019-769037046-sm.webp",
      },
      {
        id: "p11474",
        name: {
          ru: "Блинчики с мясом",
          tk: "Blinçik etli",
          tr: "Etli Krep",
          en: "Crepes with Meat",
        },
        price: 25,
        image: "1786696845387-828675382-sm.webp",
      },
      {
        id: "p11475",
        name: {
          ru: "Сигара бёрек",
          tk: "Sigara börek",
          tr: "Sigara Böreği",
          en: "Cigar Börek",
        },
        price: 30,
        image: "1786696854899-989766841-sm.webp",
      },
      {
        id: "p11476",
        name: {
          ru: "Завтрак «Ша»",
          tk: "Şa ertirligi",
          tr: "Şa Kahvaltısı",
          en: "Sha Breakfast",
        },
        price: 50,
        image: "1786696913426-527212455-sm.webp",
      },
      {
        id: "p11477",
        name: {
          ru: "Мучной завтрак",
          tk: "Muçnoý",
          tr: "Muçnoy Kahvaltı",
          en: "Muchnoy Breakfast",
        },
        price: 65,
        image: "1786696932603-389519463-sm.webp",
      },
    ],
  },
  {
    id: "c2244",
    name: {
      ru: "Супы",
      tk: "Çorbalar",
      tr: "Çorbalar",
      en: "Soups",
    },
    image: "1786696999457-280388063-sm.webp",
    items: [
      {
        id: "p11478",
        name: {
          ru: "Пача (суп из ножек)",
          tk: "Paça",
          tr: "Paça Çorbası",
          en: "Trotter Soup",
        },
        price: 30,
        image: "1786696999457-280388063-sm.webp",
      },
      {
        id: "p11479",
        name: {
          ru: "Суп «Яйла»",
          tk: "Ýaýla",
          tr: "Yayla Çorbası",
          en: "Yayla Soup",
        },
        price: 25,
        image: "1786697011733-615461792-sm.webp",
      },
      {
        id: "p11480",
        name: {
          ru: "Чечевичный суп",
          tk: "Merjimek",
          tr: "Mercimek Çorbası",
          en: "Lentil Soup",
        },
        price: 25,
        image: "1786697025107-390457656-sm.webp",
      },
      {
        id: "p11481",
        name: {
          ru: "Унаш (суп с лапшой)",
          tk: "Unaş",
          tr: "Erişte Çorbası",
          en: "Unash Noodle Soup",
        },
        price: 30,
        image: "1786697048262-322742781-sm.webp",
      },
      {
        id: "p11482",
        name: {
          ru: "Дограма",
          tk: "Dograma",
          tr: "Dograma",
          en: "Dograma",
        },
        price: 30,
        image: "1786697073954-20330550-sm.webp",
      },
      {
        id: "p11483",
        name: {
          ru: "Грибной крем-суп",
          tk: "Kömelekli kremly çorba",
          tr: "Kremalı Mantar Çorbası",
          en: "Cream of Mushroom Soup",
        },
        price: 35,
        image: "1786697096326-487965363-sm.webp",
      },
      {
        id: "p11484",
        name: {
          ru: "Суп «Эзогелин»",
          tk: "Ezogelin",
          tr: "Ezogelin Çorbası",
          en: "Ezogelin Soup",
        },
        price: 25,
        image: "1786697142859-427536132-sm.webp",
      },
    ],
  },
  {
    id: "c2245",
    name: {
      ru: "Блюда из теста",
      tk: "Hamyrly naharlar",
      tr: "Hamur İşleri",
      en: "Dough Dishes",
    },
    image: "1786703228017-637711300-sm.webp",
    items: [
      {
        id: "p11485",
        name: {
          ru: "Пицца (маленькая)",
          tk: "Pizza (kiçi)",
          tr: "Pizza (Küçük)",
          en: "Pizza (Small)",
        },
        price: 50,
        image: "1786703228017-637711300-sm.webp",
      },
      {
        id: "p11486",
        name: {
          ru: "Пицца (средняя)",
          tk: "Pizza (orta)",
          tr: "Pizza (Orta)",
          en: "Pizza (Medium)",
        },
        price: 75,
        image: "1786703234941-933478142-sm.webp",
      },
      {
        id: "p11487",
        name: {
          ru: "Пицца (большая)",
          tk: "Pizza (uly)",
          tr: "Pizza (Büyük)",
          en: "Pizza (Large)",
        },
        price: 100,
        image: "1786703241586-261010315-sm.webp",
      },
      {
        id: "p11488",
        name: {
          ru: "Пиде (маленькая)",
          tk: "Pide (kiçi)",
          tr: "Pide (Küçük)",
          en: "Pide (Small)",
        },
        price: 50,
        image: "1786697240661-939820005-sm.webp",
      },
      {
        id: "p11489",
        name: {
          ru: "Пиде (средняя)",
          tk: "Pide (orta)",
          tr: "Pide (Orta)",
          en: "Pide (Medium)",
        },
        price: 60,
        image: "1786697247355-480782741-sm.webp",
      },
      {
        id: "p11490",
        name: {
          ru: "Пиде (большая)",
          tk: "Pide (uly)",
          tr: "Pide (Büyük)",
          en: "Pide (Large)",
        },
        price: 70,
        image: "1786697253167-146620443-sm.webp",
      },
      {
        id: "p11491",
        name: {
          ru: "Ишлекли (маленькая)",
          tk: "Işlekli (kiçi)",
          tr: "İşlekli (Küçük)",
          en: "Ishlekli (Small)",
        },
        price: 50,
        image: "1786697289236-95216940-sm.webp",
      },
      {
        id: "p11492",
        name: {
          ru: "Ишлекли (средняя)",
          tk: "Işlekli (orta)",
          tr: "İşlekli (Orta)",
          en: "Ishlekli (Medium)",
        },
        price: 75,
        image: "1786697297033-593708833-sm.webp",
      },
      {
        id: "p11493",
        name: {
          ru: "Ишлекли (большая)",
          tk: "Işlekli (uly)",
          tr: "İşlekli (Büyük)",
          en: "Ishlekli (Large)",
        },
        price: 100,
        image: "1786697301662-269034361-sm.webp",
      },
      {
        id: "p11494",
        name: {
          ru: "Лахмаджун",
          tk: "Lahmajun",
          tr: "Lahmacun",
          en: "Lahmajun",
        },
        price: 30,
        image: "1786697334186-942718303-sm.webp",
      },
      {
        id: "p11495",
        name: {
          ru: "Хлеб",
          tk: "Çörek",
          tr: "Ekmek",
          en: "Bread",
        },
        price: 3,
        image: "1786697364854-86307217-sm.webp",
      },
      {
        id: "p11496",
        name: {
          ru: "Гутап с фаршем",
          tk: "Gutap üwelen",
          tr: "Kıymalı Gutap",
          en: "Gutap with Minced Meat",
        },
        price: 35,
        image: "1786697392219-225970040-sm.webp",
      },
      {
        id: "p11497",
        name: {
          ru: "Гутап с рубленым мясом",
          tk: "Gutap dogralan",
          tr: "Doğranmış Etli Gutap",
          en: "Gutap with Chopped Meat",
        },
        price: 40,
        image: "1786697397660-625526128-sm.webp",
      },
      {
        id: "p11498",
        name: {
          ru: "Бёрек в лаваше с картофелем",
          tk: "Lawaşly börek ýeralmaly",
          tr: "Patatesli Lavaş Böreği",
          en: "Lavash Börek with Potato",
        },
        price: 35,
        image: "1786697421594-18769220-sm.webp",
      },
      {
        id: "p11499",
        name: {
          ru: "Бёрек в лаваше с мясом",
          tk: "Lawaşly börek etli",
          tr: "Etli Lavaş Böreği",
          en: "Lavash Börek with Meat",
        },
        price: 40,
        image: "1786697474707-55379113-sm.webp",
      },
    ],
  },
  {
    id: "c2246",
    name: {
      ru: "Гарниры",
      tk: "Garnirler",
      tr: "Garnitürler",
      en: "Side Dishes",
    },
    image: "1786697493291-774414869-sm.webp",
    items: [
      {
        id: "p11500",
        name: {
          ru: "Картофельное пюре",
          tk: "Sada pýure",
          tr: "Sade Patates Püresi",
          en: "Mashed Potatoes",
        },
        price: 25,
        image: "1786697493291-774414869-sm.webp",
      },
      {
        id: "p11501",
        name: {
          ru: "Картофель фри",
          tk: "Fri",
          tr: "Patates Kızartması",
          en: "French Fries",
        },
        price: 25,
        image: "1786697585150-405807949-sm.webp",
      },
      {
        id: "p11502",
        name: {
          ru: "Картофель фри KFC",
          tk: "KFC fri",
          tr: "KFC Usulü Patates",
          en: "KFC-Style Fries",
        },
        price: 30,
        image: "1786697596583-311707595-sm.webp",
      },
      {
        id: "p11503",
        name: {
          ru: "Пюре с котлетой",
          tk: "Pýure kotlet",
          tr: "Köfteli Püre",
          en: "Mashed Potatoes with Cutlet",
        },
        price: 40,
        image: "1786697632722-45771851-sm.webp",
      },
      {
        id: "p11504",
        name: {
          ru: "Картофель с грибами",
          tk: "Kömelekli ýer alma",
          tr: "Mantarlı Patates",
          en: "Potatoes with Mushrooms",
        },
        price: 40,
        image: "1786697649639-164654238-sm.webp",
      },
      {
        id: "p11505",
        name: {
          ru: "Картофель с говурмой",
          tk: "Gowurma ýer alma",
          tr: "Kavurmalı Patates",
          en: "Roasted Potatoes with Meat",
        },
        price: 60,
        image: "1786697661510-860534339-sm.webp",
      },
    ],
  },
  {
    id: "c2247",
    name: {
      ru: "Закуски и салаты",
      tk: "Işdäaçarlar",
      tr: "Meze ve Salatalar",
      en: "Appetizers & Salads",
    },
    image: "1786697777511-308146307-sm.webp",
    items: [
      {
        id: "p11509",
        name: {
          ru: "Салат «Чабан»",
          tk: "Çopan işdäaçar",
          tr: "Çoban Salatası",
          en: "Shepherd's Salad",
        },
        price: 25,
        image: "1786697777511-308146307-sm.webp",
      },
      {
        id: "p11510",
        name: {
          ru: "Греческий салат",
          tk: "Grek işdäaçary",
          tr: "Yunan Salatası",
          en: "Greek Salad",
        },
        price: 25,
        image: "1786700262295-815781240-sm.webp",
      },
      {
        id: "p11511",
        name: {
          ru: "Окрошка",
          tk: "Okroşka",
          tr: "Okroşka",
          en: "Okroshka",
        },
        price: 30,
        image: "1786700148177-645110513-sm.webp",
      },
      {
        id: "p11514",
        name: {
          ru: "Салат «Оливье»",
          tk: "Oliwýe",
          tr: "Rus Salatası",
          en: "Olivier Salad",
        },
        price: 50,
        image: "1786700241365-499781196-sm.webp",
      },
      {
        id: "p11515",
        name: {
          ru: "Салат «Цезарь»",
          tk: "Sezar",
          tr: "Sezar Salatası",
          en: "Caesar Salad",
        },
        price: 50,
        image: "1786700316561-889886295-sm.webp",
      },
      {
        id: "p11516",
        name: {
          ru: "Салат «Мимоза»",
          tk: "Mimoza",
          tr: "Mimoza Salatası",
          en: "Mimosa Salad",
        },
        price: 50,
        image: "1786700327438-241770274-sm.webp",
      },
      {
        id: "p11517",
        name: {
          ru: "Винегрет",
          tk: "Winegret",
          tr: "Vinegret Salatası",
          en: "Vinaigrette Salad",
        },
        price: 50,
        image: "1786700367732-992250843-sm.webp",
      },
      {
        id: "p11518",
        name: {
          ru: "Салат «Мужской»",
          tk: "Erkek işdäaçary",
          tr: "Erkek Salatası",
          en: "Men's Salad",
        },
        price: 50,
        image: "1786700435214-35246217-sm.webp",
      },
      {
        id: "p11520",
        name: {
          ru: "Мясной салат",
          tk: "Etli işdäaçar",
          tr: "Etli Salata",
          en: "Meat Salad",
        },
        price: 50,
        image: "1786700511276-559832515-sm.webp",
      },
      {
        id: "p11521",
        name: {
          ru: "Фруктовая тарелка",
          tk: "Miwe",
          tr: "Meyve Tabağı",
          en: "Fruit Platter",
        },
        price: 100,
        image: "1786700543555-547273171-sm.webp",
      },
      {
        id: "p11525",
        name: {
          ru: "Салат «Дымок»",
          tk: "Dymok",
          tr: "Dymok Salatası",
          en: "Dymok Salad",
        },
        price: 50,
        image: "1786700633799-783889217-sm.webp",
      },
      {
        id: "p11526",
        name: {
          ru: "Салат с курицей",
          tk: "Towuk işdäaçar",
          tr: "Tavuklu Salata",
          en: "Chicken Salad",
        },
        price: 50,
        image: "1786700663525-292120465-sm.webp",
      },
      {
        id: "p11527",
        name: {
          ru: "Селёдка под шубой",
          tk: "Selýotka pod şuboý",
          tr: "Kürklü Ringa Salatası",
          en: "Herring Under a Fur Coat",
        },
        price: 70,
        image: "1786700686972-487493278-sm.webp",
      },
      {
        id: "p11529",
        name: {
          ru: "Тайский салат",
          tk: "Taý işdäaçary",
          tr: "Tayland Salatası",
          en: "Thai Salad",
        },
        price: 50,
        image: "1786700730506-598702483-sm.webp",
      },
      {
        id: "p11530",
        name: {
          ru: "Итальянский салат",
          tk: "Italýan işdäaçary",
          tr: "İtalyan Salatası",
          en: "Italian Salad",
        },
        price: 50,
        image: "1786700759133-906871752-sm.webp",
      },
      {
        id: "p11531",
        name: {
          ru: "Индийский салат",
          tk: "Hindi işdäaçary",
          tr: "Hint Salatası",
          en: "Indian Salad",
        },
        price: 50,
        image: "1786700791710-95891151-sm.webp",
      },
    ],
  },
  {
    id: "c2248",
    name: {
      ru: "Мясные блюда",
      tk: "Etli naharlar",
      tr: "Et Yemekleri",
      en: "Meat Dishes",
    },
    image: "1786700802124-52402007-sm.webp",
    items: [
      {
        id: "p11532",
        name: {
          ru: "Стейк «Нью-Йорк»",
          tk: "New York steýk",
          tr: "New York Steak",
          en: "New York Steak",
        },
        price: 120,
        image: "1786700802124-52402007-sm.webp",
      },
      {
        id: "p11533",
        name: {
          ru: "Стейк «Ти-бон»",
          tk: "T-Bone steýk",
          tr: "T-Bone Steak",
          en: "T-Bone Steak",
        },
        price: 130,
        image: "1786701164189-641997560-sm.webp",
      },
      {
        id: "p11534",
        name: {
          ru: "Карныярык",
          tk: "Karny ýaryk",
          tr: "Karnıyarık",
          en: "Karniyarik",
        },
        price: 50,
        image: "1786700879417-637549091-sm.webp",
      },
      {
        id: "p11535",
        name: {
          ru: "Чиг кёфте",
          tk: "Çig köfte",
          tr: "Çiğ Köfte",
          en: "Chi Kofte",
        },
        price: 60,
        image: "1786700904644-615027916-sm.webp",
      },
      {
        id: "p11536",
        name: {
          ru: "Хлеб",
          tk: "Çörek",
          tr: "Ekmek",
          en: "Bread",
        },
        price: 3,
        image: "1786700929295-839477760-sm.webp",
      },
      {
        id: "p11537",
        name: {
          ru: "Какмач на сливочном масле",
          tk: "Kakmaç mesgede",
          tr: "Tereyağlı Kakmaç",
          en: "Kakmach in Butter",
        },
        price: 60,
        image: "1786700940504-980534465-sm.webp",
      },
      {
        id: "p11538",
        name: {
          ru: "Гювеч",
          tk: "Güweç",
          tr: "Güveç",
          en: "Güveç Casserole",
        },
        price: 60,
        image: "1786700962999-943143155-sm.webp",
      },
      {
        id: "p11539",
        name: {
          ru: "Бефстроганов",
          tk: "Beef stroganoff",
          tr: "Beef Stroganoff",
          en: "Beef Stroganoff",
        },
        price: 60,
        image: "1786700972892-684505257-sm.webp",
      },
      {
        id: "p11541",
        name: {
          ru: "Мясо по-чабански",
          tk: "Et çopan gowurma",
          tr: "Çoban Kavurma",
          en: "Shepherd's Style Roast Meat",
        },
        price: 60,
        image: "1786700998166-692344537-sm.webp",
      },
      {
        id: "p11543",
        name: {
          ru: "Долма в виноградных листьях",
          tk: "Ýaprak sarma",
          tr: "Yaprak Sarma",
          en: "Stuffed Vine Leaves",
        },
        price: 50,
        image: "1786701049687-188214921-sm.webp",
      },
      {
        id: "p11544",
        name: {
          ru: "Мясное соте",
          tk: "Et sote",
          tr: "Et Sote",
          en: "Meat Sauté",
        },
        price: 60,
        image: "1786701058282-476281290-sm.webp",
      },
    ],
  },
  {
    id: "c2249",
    name: {
      ru: "Рыбные блюда",
      tk: "Balykly naharlar",
      tr: "Balık Yemekleri",
      en: "Fish Dishes",
    },
    image: "1786701065956-383121488-sm.webp",
    items: [
      {
        id: "p11545",
        name: {
          ru: "Хамса на сковороде",
          tk: "Hamsy tawa",
          tr: "Hamsi Tava",
          en: "Pan-Fried Anchovy",
        },
        price: 0,
        image: "1786701065956-383121488-sm.webp",
      },
      {
        id: "p11546",
        name: {
          ru: "Кефаль целиком",
          tk: "Kefal bitin",
          tr: "Bütün Kefal",
          en: "Whole Mullet",
        },
        price: 0,
        image: "1786701104386-565236730-sm.webp",
      },
      {
        id: "p11547",
        name: {
          ru: "Кефаль на сковороде",
          tk: "Kefal tawa",
          tr: "Kefal Tava",
          en: "Pan-Fried Mullet",
        },
        price: 0,
        image: "1786701122177-821701126-sm.webp",
      },
      {
        id: "p11548",
        name: {
          ru: "Судак на сковороде",
          tk: "Sudak tawa",
          tr: "Sudak Tava",
          en: "Pan-Fried Pike-Perch",
        },
        price: 0,
        image: "1786701154242-614507472-sm.webp",
      },
      {
        id: "p11549",
        name: {
          ru: "Осетрина на сковороде",
          tk: "Bekre tawa",
          tr: "Mersin Balığı Tava",
          en: "Pan-Fried Sturgeon",
        },
        price: 0,
        image: "1786701192852-813538398-sm.webp",
      },
      {
        id: "p11550",
        name: {
          ru: "Ассорти из рыбы",
          tk: "Balyk görnüşleri podnos",
          tr: "Karışık Balık Tabağı",
          en: "Assorted Fish Platter",
        },
        price: 0,
        image: "1786701217660-332713168-sm.webp",
      },
      {
        id: "p11551",
        name: {
          ru: "Кефр на сковороде",
          tk: "Kefr tawa",
          tr: "Kefr Tava",
          en: "Pan-Fried Kefr Fish",
        },
        price: 0,
        image: "1786701243160-209087841-sm.webp",
      },
    ],
  },
  {
    id: "c2250",
    name: {
      ru: "Донеры",
      tk: "Dönerler",
      tr: "Dönerler",
      en: "Doners",
    },
    image: "1786701261220-392444195-sm.webp",
    items: [
      {
        id: "p11552",
        name: {
          ru: "Донер с курицей",
          tk: "Towukly döner",
          tr: "Tavuk Döner",
          en: "Chicken Doner",
        },
        price: 25,
        image: "1786701261220-392444195-sm.webp",
      },
      {
        id: "p11553",
        name: {
          ru: "Донер с мясом",
          tk: "Etli döner",
          tr: "Etli Döner",
          en: "Meat Doner",
        },
        price: 30,
        image: "1786701353095-647487406-sm.webp",
      },
      {
        id: "p11554",
        name: {
          ru: "Донер в лаваше (малый)",
          tk: "Lawaşly döner (kiçi)",
          tr: "Lavaş Döner (Küçük)",
          en: "Lavash Doner (Small)",
        },
        price: 30,
        image: "1786701377637-197216807-sm.webp",
      },
      {
        id: "p11555",
        name: {
          ru: "Донер в лаваше (большой)",
          tk: "Lawaşly döner (uly)",
          tr: "Lavaş Döner (Büyük)",
          en: "Lavash Doner (Large)",
        },
        price: 35,
        image: "1786701383202-129592961-sm.webp",
      },
      {
        id: "p11556",
        name: {
          ru: "Хамса «дёка»",
          tk: "Hamsy döka",
          tr: "Hamsi Döka",
          en: "Anchovy Döka",
        },
        price: 40,
        image: "1786701407028-64571383-sm.webp",
      },
      {
        id: "p11557",
        name: {
          ru: "Люля в лаваше",
          tk: "Lüle dolama",
          tr: "Lüle Dolama",
          en: "Lule Wrap",
        },
        price: 50,
        image: "1786701422496-656932903-sm.webp",
      },
      {
        id: "p11558",
        name: {
          ru: "Донер на тарелке",
          tk: "Döner tabakda",
          tr: "Porsiyon Döner",
          en: "Doner Plate",
        },
        price: 50,
        image: "1786701434509-829202735-sm.webp",
      },
      {
        id: "p11559",
        name: {
          ru: "Донер на плове",
          tk: "Palow üsti döner",
          tr: "Pilav Üstü Döner",
          en: "Doner over Pilaf",
        },
        price: 50,
        image: "1786701443460-105028117-sm.webp",
      },
      {
        id: "p11560",
        name: {
          ru: "Искендер кебаб",
          tk: "Iskender kebap",
          tr: "İskender Kebap",
          en: "Iskender Kebab",
        },
        price: 50,
        image: "1786701454351-597953299-sm.webp",
      },
    ],
  },
  {
    id: "c2251",
    name: {
      ru: "Бургеры",
      tk: "Burgerler",
      tr: "Burgerler",
      en: "Burgers",
    },
    image: "1786701501318-943454227-sm.webp",
    items: [
      {
        id: "p11561",
        name: {
          ru: "Чизбургер",
          tk: "Çizburger",
          tr: "Cheeseburger",
          en: "Cheeseburger",
        },
        price: 40,
        image: "1786701501318-943454227-sm.webp",
      },
      {
        id: "p11562",
        name: {
          ru: "Чикенбургер",
          tk: "Çikenburger",
          tr: "Chicken Burger",
          en: "Chicken Burger",
        },
        price: 40,
        image: "1786701514011-223945-sm.webp",
      },
      {
        id: "p11563",
        name: {
          ru: "Хот-дог",
          tk: "Hot-dog",
          tr: "Hot Dog",
          en: "Hot Dog",
        },
        price: 30,
        image: "1786701523847-895007510-sm.webp",
      },
    ],
  },
  {
    id: "c2252",
    name: {
      ru: "Туркменские и турецкие блюда",
      tk: "Türkmen we türk naharlary",
      tr: "Türkmen ve Türk Yemekleri",
      en: "Turkmen & Turkish Dishes",
    },
    image: "1786701743368-732691746-sm.webp",
    items: [
      {
        id: "p11564",
        name: {
          ru: "Туркменский плов (малый)",
          tk: "Türkmen palow (kiçi)",
          tr: "Türkmen Pilavı (Küçük)",
          en: "Turkmen Pilaf (Small)",
        },
        price: 25,
        image: "1786701743368-732691746-sm.webp",
      },
      {
        id: "p11565",
        name: {
          ru: "Туркменский плов (большой)",
          tk: "Türkmen palow (uly)",
          tr: "Türkmen Pilavı (Büyük)",
          en: "Turkmen Pilaf (Large)",
        },
        price: 30,
        image: "1786701748020-814443587-sm.webp",
      },
      {
        id: "p11566",
        name: {
          ru: "Бёрек с яйцом",
          tk: "Ýumurtga börek",
          tr: "Yumurtalı Börek",
          en: "Börek with Egg",
        },
        price: 40,
        image: "1786701760256-831860572-sm.webp",
      },
      {
        id: "p11567",
        name: {
          ru: "Бёрек с картофелем",
          tk: "Ýer almaly börek",
          tr: "Patatesli Börek",
          en: "Börek with Potato",
        },
        price: 40,
        image: "1786701784959-723853494-sm.webp",
      },
      {
        id: "p11568",
        name: {
          ru: "Гречка (малая)",
          tk: "Greçka (kiçi)",
          tr: "Karabuğday (Küçük)",
          en: "Buckwheat (Small)",
        },
        price: 20,
        image: "1786702071794-273210824-sm.webp",
      },
      {
        id: "p11569",
        name: {
          ru: "Гречка (большая)",
          tk: "Greçka (uly)",
          tr: "Karabuğday (Büyük)",
          en: "Buckwheat (Large)",
        },
        price: 30,
        image: "1786702084857-974794440-sm.webp",
      },
      {
        id: "p11570",
        name: {
          ru: "Манты (малая порция)",
          tk: "Manty (kiçi)",
          tr: "Mantı (Küçük)",
          en: "Manty (Small)",
        },
        price: 30,
        image: "1786702109229-623363389-sm.webp",
      },
      {
        id: "p11571",
        name: {
          ru: "Манты (большая порция)",
          tk: "Manty (uly)",
          tr: "Mantı (Büyük)",
          en: "Manty (Large)",
        },
        price: 40,
        image: "1786702116624-750499683-sm.webp",
      },
      {
        id: "p11572",
        name: {
          ru: "Турецкий плов",
          tk: "Türk palow",
          tr: "Türk Pilavı",
          en: "Turkish Pilaf",
        },
        price: 25,
        image: "1786702142950-984458642-sm.webp",
      },
      {
        id: "p11573",
        name: {
          ru: "Спагетти болоньезе",
          tk: "Spagetti bolonez",
          tr: "Spagetti Bolonez",
          en: "Spaghetti Bolognese",
        },
        price: 30,
        image: "1786702184983-869447990-sm.webp",
      },
      {
        id: "p11574",
        name: {
          ru: "Маклюба (малая)",
          tk: "Makluba (kiçi)",
          tr: "Maklube (Küçük)",
          en: "Maqluba (Small)",
        },
        price: 500,
        image: "1786702223979-295321528-sm.webp",
      },
      {
        id: "p11575",
        name: {
          ru: "Маклюба (большая)",
          tk: "Makluba (uly)",
          tr: "Maklube (Büyük)",
          en: "Maqluba (Large)",
        },
        price: 700,
        image: "1786702229083-913056669-sm.webp",
      },
      {
        id: "p11576",
        name: {
          ru: "Турецкие манты",
          tk: "Türk manty",
          tr: "Türk Mantısı",
          en: "Turkish Manti",
        },
        price: 40,
        image: "1786702251562-335967679-sm.webp",
      },
      {
        id: "p11577",
        name: {
          ru: "Феттучини Альфредо",
          tk: "Fetuçini alfredo",
          tr: "Fettuccine Alfredo",
          en: "Fettuccine Alfredo",
        },
        price: 30,
        image: "1786702280605-356521480-sm.webp",
      },
    ],
  },
  {
    id: "c2253",
    name: {
      ru: "Блюда из курицы",
      tk: "Towuk naharlary",
      tr: "Tavuk Yemekleri",
      en: "Chicken Dishes",
    },
    image: "1786702305989-711033605-sm.webp",
    items: [
      {
        id: "p11578",
        name: {
          ru: "Куриное соте",
          tk: "Towuk sote",
          tr: "Tavuk Sote",
          en: "Chicken Sauté",
        },
        price: 50,
        image: "1786702305989-711033605-sm.webp",
      },
      {
        id: "p11579",
        name: {
          ru: "Цыплёнок в сливочном масле",
          tk: "Jüýje mesge, batyrma",
          tr: "Tereyağına Batırılmış Piliç",
          en: "Butter-Dipped Spring Chicken",
        },
        price: 50,
        image: "1786702315116-423386374-sm.webp",
      },
      {
        id: "p11581",
        name: {
          ru: "Куриное филе гриль",
          tk: "Towuk file yzgara",
          tr: "Izgara Tavuk Fileto",
          en: "Grilled Chicken Fillet",
        },
        price: 50,
        image: "1786702390053-50117680-sm.webp",
      },
      {
        id: "p11582",
        name: {
          ru: "Цыплёнок гриль",
          tk: "Pliç yzgara",
          tr: "Izgara Piliç",
          en: "Grilled Spring Chicken",
        },
        price: 50,
        image: "1786702411582-313781224-sm.webp",
      },
      {
        id: "p11583",
        name: {
          ru: "Курица в соусе карри",
          tk: "Köri sously towuk",
          tr: "Köri Soslu Tavuk",
          en: "Chicken in Curry Sauce",
        },
        price: 50,
        image: "1786702432428-251551153-sm.webp",
      },
      {
        id: "p11584",
        name: {
          ru: "Курица «Падишах сефасы»",
          tk: "Patyşah sefasy",
          tr: "Padişah Sefası",
          en: "Padishah's Delight Chicken",
        },
        price: 50,
        image: "1786702543587-45483636-sm.webp",
      },
      {
        id: "p11585",
        name: {
          ru: "Курица в йогуртовом соусе",
          tk: "Ýogurtly towuk",
          tr: "Yoğurtlu Tavuk",
          en: "Chicken in Yogurt Sauce",
        },
        price: 50,
        image: "1786702551162-88046142-sm.webp",
      },
      {
        id: "p11586",
        name: {
          ru: "Куриные крылышки",
          tk: "Towuk ganat",
          tr: "Tavuk Kanat",
          en: "Chicken Wings",
        },
        price: 50,
        image: "1786702662453-4190306-sm.webp",
      },
      {
        id: "p11587",
        name: {
          ru: "Куриная грудка",
          tk: "Towuk döş",
          tr: "Tavuk Göğsü",
          en: "Chicken Breast",
        },
        price: 50,
        image: "1786702710643-518219163-sm.webp",
      },
      {
        id: "p11588",
        name: {
          ru: "Курица в грибном сливочном соусе",
          tk: "Kömelek kremly towuk",
          tr: "Kremalı Mantarlı Tavuk",
          en: "Chicken in Mushroom Cream Sauce",
        },
        price: 50,
        image: "1786702787888-848439890-sm.webp",
      },
      {
        id: "p11589",
        name: {
          ru: "Куриный шницель",
          tk: "Towuk şnitsel",
          tr: "Tavuk Şnitzel",
          en: "Chicken Schnitzel",
        },
        price: 50,
        image: "1786702864385-500946062-sm.webp",
      },
    ],
  },
  {
    id: "c2254",
    name: {
      ru: "Блюда на мангале",
      tk: "Mangal naharlary",
      tr: "Mangal Yemekleri",
      en: "Grill Dishes",
    },
    image: "1786702931235-101156300-sm.webp",
    items: [
      {
        id: "p11592",
        name: {
          ru: "Люля-кебаб из курицы",
          tk: "Towuk lüle",
          tr: "Tavuk Lüle Kebap",
          en: "Chicken Lule Kebab",
        },
        price: 25,
        image: "1786702931235-101156300-sm.webp",
      },
      {
        id: "p11593",
        name: {
          ru: "Шашлык из курицы",
          tk: "Towuk şaşlyk",
          tr: "Tavuk Şiş",
          en: "Chicken Shashlik",
        },
        price: 25,
        image: "1786702945651-210438503-sm.webp",
      },
      {
        id: "p11594",
        name: {
          ru: "Куриное бедро на мангале",
          tk: "Towuk budy",
          tr: "Tavuk But",
          en: "Chicken Thigh Skewer",
        },
        price: 40,
        image: "1786703045983-276135669-sm.webp",
      },
      {
        id: "p11595",
        name: {
          ru: "Люля-кебаб из мяса",
          tk: "Et lüle",
          tr: "Et Lüle Kebap",
          en: "Meat Lule Kebab",
        },
        price: 30,
        image: "1786703064746-398405919-sm.webp",
      },
      {
        id: "p11596",
        name: {
          ru: "Печень в обёртке",
          tk: "Bagyr dolama",
          tr: "Ciğer Sarma",
          en: "Wrapped Liver Skewer",
        },
        price: 50,
        image: "1786703076099-732310802-sm.webp",
      },
      {
        id: "p11597",
        name: {
          ru: "Шашлык из баранины",
          tk: "Goýun şaşlyk",
          tr: "Kuzu Şiş",
          en: "Lamb Shashlik",
        },
        price: 70,
        image: "1786703085887-647823669-sm.webp",
      },
      {
        id: "p11598",
        name: {
          ru: "Бараньи рёбра",
          tk: "Goýun gapyrga",
          tr: "Kuzu Pirzola",
          en: "Lamb Ribs",
        },
        price: 80,
        image: "1786703116224-158966391-sm.webp",
      },
      {
        id: "p11599",
        name: {
          ru: "Адана кебаб",
          tk: "Adana kebap",
          tr: "Adana Kebap",
          en: "Adana Kebab",
        },
        price: 50,
        image: "1786703122719-514826536-sm.webp",
      },
      {
        id: "p11600",
        name: {
          ru: "Бейти сарма",
          tk: "Beýti sarma",
          tr: "Beyti Sarma",
          en: "Beyti Wrap",
        },
        price: 50,
        image: "1786703130784-256459940-sm.webp",
      },
    ],
  },
  {
    id: "c2255",
    name: {
      ru: "Кофе",
      tk: "Kofe",
      tr: "Kahve",
      en: "Coffee",
    },
    image: "1786703285799-268477329-sm.webp",
    items: [
      {
        id: "p11603",
        name: {
          ru: "Эспрессо",
          tk: "Espresso",
          tr: "Espresso",
          en: "Espresso",
        },
        price: 15,
        image: "1786703285799-268477329-sm.webp",
      },
      {
        id: "p11604",
        name: {
          ru: "Американо",
          tk: "Amerikano",
          tr: "Americano",
          en: "Americano",
        },
        price: 15,
        image: "1786703303774-154351988-sm.webp",
      },
      {
        id: "p11605",
        name: {
          ru: "Латте (маленький)",
          tk: "Latte (kiçi)",
          tr: "Latte (Küçük)",
          en: "Latte (Small)",
        },
        price: 25,
        image: "1786703550726-559891523-sm.webp",
      },
      {
        id: "p11606",
        name: {
          ru: "Латте (большой)",
          tk: "Latte (uly)",
          tr: "Latte (Büyük)",
          en: "Latte (Large)",
        },
        price: 30,
        image: "1786703564596-906779349-sm.webp",
      },
      {
        id: "p11607",
        name: {
          ru: "Капучино",
          tk: "Kapuçino",
          tr: "Cappuccino",
          en: "Cappuccino",
        },
        price: 20,
        image: "1786704088307-657467641-sm.webp",
      },
      {
        id: "p11609",
        name: {
          ru: "Раф кофе",
          tk: "Raf kofe",
          tr: "Raf Kahve",
          en: "Raf Coffee",
        },
        price: 30,
        image: "1786704157542-27466033-sm.webp",
      },
      {
        id: "p11610",
        name: {
          ru: "Мокка",
          tk: "Mokka",
          tr: "Mocha",
          en: "Mocha",
        },
        price: 30,
        image: "1786704181875-701208902-sm.webp",
      },
      {
        id: "p11613",
        name: {
          ru: "Фраппучино",
          tk: "Frappuçino",
          tr: "Frappuccino",
          en: "Frappuccino",
        },
        price: 35,
        image: "1786704229195-96379047-sm.webp",
      },
    ],
  },
  {
    id: "c2256",
    name: {
      ru: "Чай",
      tk: "Çaý",
      tr: "Çay",
      en: "Tea",
    },
    image: "1786792765476-730117689-sm.webp",
    items: [
      {
        id: "p11619",
        name: {
          ru: "Турецкий чай (стакан)",
          tk: "Türk çaý (käse)",
          tr: "Türk Çayı (Bardak)",
          en: "Turkish Tea (Glass)",
        },
        price: 5,
        image: "1786792765476-730117689-sm.webp",
      },
      {
        id: "p11620",
        name: {
          ru: "Турецкий чай (чайник)",
          tk: "Türk çaý (çäýnek)",
          tr: "Türk Çayı (Demlik)",
          en: "Turkish Tea (Pot)",
        },
        price: 20,
        image: "1786792776372-963288416-sm.webp",
      },
      {
        id: "p11622",
        name: {
          ru: "Фруктовый чай",
          tk: "Çaý miweli",
          tr: "Meyveli Çay",
          en: "Fruit Tea",
        },
        price: 35,
        image: "1786704276059-44777041-sm.webp",
      },
      {
        id: "p11623",
        name: {
          ru: "Чай с лимоном и мятой",
          tk: "Çaý limon, narpyz",
          tr: "Limonlu Naneli Çay",
          en: "Lemon & Mint Tea",
        },
        price: 25,
        image: "1786704288389-47201615-sm.webp",
      },
    ],
  },
  {
    id: "c2257",
    name: {
      ru: "Лимонады и мохито",
      tk: "Limonad we mohito",
      tr: "Limonata ve Mojito",
      en: "Lemonade & Mojito",
    },
    image: "1786704323325-706226360-sm.webp",
    items: [
      {
        id: "p11626",
        name: {
          ru: "Классический лимонад",
          tk: "Limonad klassik",
          tr: "Klasik Limonata",
          en: "Classic Lemonade",
        },
        price: 30,
        image: "1786704323325-706226360-sm.webp",
      },
      {
        id: "p11627",
        name: {
          ru: "Лимонад киви",
          tk: "Kiwi limonad",
          tr: "Kivili Limonata",
          en: "Kiwi Lemonade",
        },
        price: 30,
        image: "1786704336211-558548094-sm.webp",
      },
    ],
  },
  {
    id: "c2372",
    name: {
      ru: "Холодные напитки",
      tk: "Sowuk icgiler",
      tr: "Soğuk İçecekler",
      en: "Cold drinks",
    },
    image: "1786794839842-880885516-sm.webp",
    items: [
      {
        id: "p11998",
        name: {
          ru: "Кола Чынар",
          tk: "Kola Cynar",
          tr: "Çynar Kola",
          en: "Chynar Cola",
        },
        price: 10,
        image: "1786794839842-880885516-sm.webp",
      },
      {
        id: "p11999",
        name: {
          ru: "Гоша Чынар",
          tk: "Gosa Cynar",
          tr: "Goşa Çynar",
          en: "Gosha Chynar",
        },
        price: 7,
        image: "1786794839842-781760234-sm.webp",
      },
      {
        id: "p12000",
        name: {
          ru: "Кока-Кола 1 л",
          tk: "Coca Cola 1l",
          tr: "Coca-Cola 1L",
          en: "Coca-Cola 1L",
        },
        price: 20,
        image: "1786794839842-230717318-sm.webp",
      },
      {
        id: "p12001",
        name: {
          ru: "Пепси 0,5 л",
          tk: "Pepsi 0.5 l",
          tr: "Pepsi 0.5L",
          en: "Pepsi 0.5L",
        },
        price: 8,
        image: "1786794839842-87372452-sm.webp",
      },
      {
        id: "p12002",
        name: {
          ru: "Вода Арчалык",
          tk: "Arcalyk suw",
          tr: "Arçalyk Su",
          en: "Archalyk Water",
        },
        price: 3,
        image: "1786794839842-869733300-sm.webp",
      },
      {
        id: "p12003",
        name: {
          ru: "Липтон зелёный",
          tk: "Lipton gok",
          tr: "Lipton Yeşil Çay",
          en: "Lipton Green Tea",
        },
        price: 8,
        image: "1786794839842-308386623-sm.webp",
      },
      {
        id: "p12004",
        name: {
          ru: "Липтон чёрный",
          tk: "Lipton Gara",
          tr: "Lipton Siyah Çay",
          en: "Lipton Black Tea",
        },
        price: 8,
        image: "1786794839842-703376004-sm.webp",
      },
      {
        id: "p12005",
        name: {
          ru: "Кока-Кола 0,5 л",
          tk: "Coca cola 0.5l",
          tr: "Coca-Cola 0.5L",
          en: "Coca-Cola 0.5L",
        },
        price: 10,
        image: "1786794839842-881548502-sm.webp",
      },
      {
        id: "p12006",
        name: {
          ru: "Повризе",
          tk: "Powrize",
          tr: "Powrize",
          en: "Powrize",
        },
        price: 5,
        image: "1786794839842-66996776-sm.webp",
      },
      {
        id: "p12007",
        name: {
          ru: "Кола Чынар",
          tk: "Kola Cynar",
          tr: "Çynar Kola",
          en: "Chynar Cola",
        },
        price: 7,
        image: "1786794839842-502597386-sm.webp",
      },
      {
        id: "p12008",
        name: {
          ru: "Спрайт",
          tk: "Sprite",
          tr: "Sprite",
          en: "Sprite",
        },
        price: 15,
        image: "1786794839842-187734962-sm.webp",
      },
      {
        id: "p12009",
        name: {
          ru: "Эчил Вишня",
          tk: "Ecil ulje",
          tr: "Eçil Vişne",
          en: "Echil Cherry",
        },
        price: 20,
        image: "1786794839842-778332502-sm.webp",
      },
      {
        id: "p12010",
        name: {
          ru: "Эчил Апельсин",
          tk: "Ecil Pyrtykal",
          tr: "Eçil Portakal",
          en: "Echil Orange",
        },
        price: 20,
        image: "1786794839842-634776315-sm.webp",
      },
      {
        id: "p12011",
        name: {
          ru: "Эчил Персик",
          tk: "Ecil Setdaly",
          tr: "Eçil Şeftali",
          en: "Echil Peach",
        },
        price: 20,
        image: "1786794839842-115965327-sm.webp",
      },
      {
        id: "p12012",
        name: {
          ru: "Эчил Яблоко",
          tk: "Ecil Alma",
          tr: "Eçil Elma",
          en: "Echil Apple",
        },
        price: 20,
        image: "1786794839842-219850532-sm.webp",
      },
      {
        id: "p12013",
        name: {
          ru: "Эчил Гранат",
          tk: "Ecil Nar",
          tr: "Eçil Nar",
          en: "Echil Pomegranate",
        },
        price: 20,
        image: "1786794839842-910998936-sm.webp",
      },
      {
        id: "p12014",
        name: {
          ru: "7 Гюн Яблоко",
          tk: "7 Gun Alma",
          tr: "7 Gün Elma",
          en: "7 Gun Apple",
        },
        price: 15,
        image: "1786794839842-949638148-sm.webp",
      },
      {
        id: "p12015",
        name: {
          ru: "7 Гюн Вишня",
          tk: "7 Gun Ulje",
          tr: "7 Gün Vişne",
          en: "7 Gun Cherry",
        },
        price: 15,
        image: "1786794839842-910210766-sm.webp",
      },
      {
        id: "p12016",
        name: {
          ru: "7 Гюн Апельсин",
          tk: "7 Gun Pyrtykal",
          tr: "7 Gün Portakal",
          en: "7 Gun Orange",
        },
        price: 15,
        image: "1786794839842-870331308-sm.webp",
      },
      {
        id: "p12017",
        name: {
          ru: "7 Гюн Персик",
          tk: "7 Gun Setdaly",
          tr: "7 Gün Şeftali",
          en: "7 Gun Peach",
        },
        price: 15,
        image: "1786794839842-892551543-sm.webp",
      },
      {
        id: "p12018",
        name: {
          ru: "7 Гюн Тропик",
          tk: "7 Gun Tropik",
          tr: "7 Gün Tropikal",
          en: "7 Gun Tropical",
        },
        price: 15,
        image: "1786794839842-356711442-sm.webp",
      },
    ],
  },
];
