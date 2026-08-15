# Sa Pizza — QR menü / QR menu

Veritabanı, backend, build adımı yok. `index.html` dosyasını açman yeterli.
No database, no backend, no build step — just open `index.html`.

```
sa-pizza.github.io/
├── index.html     ← iskelet: boş kutular, JS bunları doldurur
├── data.js        ← ★ DÜZENLENECEK DOSYA: telefon, menü, fiyatlar, diller, banner
├── app.js         ← çizim + sepet + SMS mantığı (dokunma)
├── styles.css     ← görünüm
└── uploads/       ← ürün resimleri + logo + parallax görselleri
```

Menüyü, fiyatı, dili ya da telefonu değiştirmek için **sadece `data.js`**
dosyasına gir. `app.js` bu dosyadan sonra yüklenir ve oradaki `CONFIG`,
`BANNERS`, `LANGS`, `T`, `MENU` değerlerini okur — bu yüzden `index.html`
içindeki `<script>` sırası değişmemeli.

Everything you edit lives in **`data.js`**. `app.js` loads after it and reads
`CONFIG`, `BANNERS`, `LANGS`, `T` and `MENU` from it, so keep the `<script>`
order in `index.html` as it is.

## 1. Telefon numarası / Phone number

`data.js` içindeki `CONFIG` bloğu:

```js
const CONFIG = {
  phone: "+99362998301", // ← hem SMS siparişi hem arama düğmesi bu numarayı kullanır
  brand: "Sa Pizza",
  currency: "m",
  currencyAfter: true, // 12 m  →  true   |   m12  →  false
  deliveryFee: 5, // sepet toplamına eklenir
  defaultLanguage: "ru", // ru | tk | tr | en
  defaultTheme: "light", // dark | light
  logo: "uploads/logo.webp",
  heroLeft: "uploads/hero-left.webp",
  heroRight: "uploads/hero-right.webp",
  bannerAutoplayMs: 3500,
};
```

> **Tek numara, iki düğme.** Sepetteki **Заказать по СМС** bu numaraya mesaj
> yazar, yanındaki **Позвонить** düğmesi de aynı numarayı arar (`tel:`).
> Numarayı değiştirmek için tek satır yeter. `phone: ""` bırakılırsa sipariş
> gönderilemez ve arama düğmesi tamamen gizlenir.
> One number, two buttons: the SMS order and the call button beside it both use
> `CONFIG.phone`. Leave it empty and ordering stops and the call button hides.

Müşteri sepeti doldurup **Заказать по СМС** düğmesine bastığında, telefonun
kendi **mesajlar (SMS) uygulaması** açılır ve seçilen ürünler + adet + toplam
tutar hazır bir metin olarak bu numaraya yazılır — WhatsApp veya internet
gerekmez, müşteri sadece **Gönder**e basar.

**Ad ve adres zorunludur** — ikisi de doldurulmadan gönder düğmesi çalışmaz;
boş alan varsa uyarı çıkar ve eksik alana odaklanır.

Örnek mesaj:

```
Здравствуйте! Хочу сделать заказ:

2 x Пицца (большая) - 130 m
1 x Донер с курицей - 30 m
Доставка: 5 m

Итого: 165 m
Имя: Kerim
Адрес: Atatürk cad. No 5
```

## 2. Ürün eklemek / Adding products

`data.js` içindeki `const MENU = [...]` listesi. Her kategori bir blok, her ürün
tek bir kayıt (sayfada tek bir kart olarak çıkar):

```js
{
  id: "c2251",
  name: { ru: "Бургеры", tk: "Burgerler", tr: "Burgerler", en: "Burgers" },
  image: "1786701501318-943454227-sm.webp",   // şeritteki yuvarlak resim
  items: [
    {
      id: "p11600",
      name: { ru: "Чизбургер", tk: "Çizburger", tr: "Cheeseburger", en: "Cheeseburger" },
      price: 35,
      image: "1786701501318-943454227-sm.webp",
    },
  ],
},
```

- `id` her ürün için farklı olmalı (sepet bununla çalışır).
- `image` → `uploads/` klasöründeki dosyanın **sadece adı**. Yeni resmi bu klasöre kopyala.
- `image` satırını hiç yazmazsan kart 🍽️ simgesiyle görünür.
- Dil eksikse `ru` yazısı kullanılır.

## 3. Banner (kayan afiş) / Auto-scrolling banner

`data.js` içindeki `const BANNERS = [...]` listesi. Kendiliğinden kayar
(`CONFIG.bannerAutoplayMs` süresinde bir), parmakla / mouse ile sürükleyip de
geçilebilir:

```js
{
  image: "1786703241586-261010315-sm.webp",
  title: { ru: "Пицца из дровяной печи", tk: "Odun peçinde pizza", tr: "Taş fırında pizza", en: "Stone-baked pizza" },
  text: { ru: "Sa Pizza — с 2012 года", tk: "…", tr: "…", en: "…" },
}
```

Liste boşsa (`BANNERS = []`) banner alanı hiç görünmez.

## 4. Hazır özellikler / What's included

- **18 kategori, 187 ürün** — Sa Pizza menü verisinden alındı, fiyatlar ve
  resimler dahil (resmi olmayan 50 ürün 🍽️ simgesiyle çıkar)
- **Parallax üst alan**: logo + "Добро пожаловать" yazısı kaydırınca yavaşça
  kaybolur, yan görseller daha yavaş sürüklenir
- **Kayan banner**: otomatik kayar, elle de kaydırılabilir, noktalarla gezinilir
- **Kategori şeridi**: yapışkan (sticky) durur; bir kategoriye dokunursan sayfa o
  ürünlere kayar; sayfayı kendin kaydırdıkça hangi kategoride olduğun otomatik
  öne çıkar (scroll-spy)
- **Ürüne dokun → büyük resim penceresi** açılır (isim, kategori, fiyat, sepete
  ekle / +/- düğmeleriyle); karttaki **+** / **-** ise pencereyi açmadan direkt
  sepete ekler/çıkarır
- **Ad ve adres zorunlu**: sipariş göndermeden önce ikisi de doldurulmuş olmalı
- Dil değiştirici: Русский / Türkmençe / Türkçe / English
- Koyu ↔ açık tema; seçim tarayıcıda saklanır
- Alt barda sağda tek daire = sepet (adet göstergeli)
- Sepet, dil ve tema sayfa yenilenince kaybolmaz (localStorage)
- Sipariş, WhatsApp değil **telefonun kendi SMS uygulaması** ile gönderilir
- Mağaza (dükan) bölümü yok — sadece yemek menüsü
- PDF menü yok, backend/veritabanı çağrısı yok

## 5. Yayına almak / Publishing

GitHub Pages: dört dosyayı ve `uploads/` klasörünü repo köküne koy, push et.

```bash
cp -R index.html data.js app.js styles.css uploads sa-pizza.github.io/
cd sa-pizza.github.io && git add . && git commit -m "online menu" && git push
```

Yerelde denemek için `index.html` dosyasına çift tıklaman yeterli — dosyalar
aynı klasörde olduğu sürece `file://` ile de açılır. Yine de küçük bir sunucu
gerçek yayına daha yakındır:

```bash
python3 -m http.server 8080     # → http://localhost:8080
```
