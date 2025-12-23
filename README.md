# ⏰ Patika JavaScript Saat ve Karşılama Uygulaması

Bu proje, **Patika Frontend Web Development Patikası** kapsamında verilen **JavaScript Saat Ödevi** için hazırlanmıştır.

Uygulama; kullanıcıdan isim alır, ekranda kişisel bir karşılama mesajı gösterir ve **anlık saat + gün bilgisini** canlı olarak ekrana yansıtır.

---

## 🚀 Proje Özellikleri

* Sayfa açıldığında kullanıcıdan **isim bilgisi** alınır
* Girilen isim ekranda karşılama mesajında gösterilir
* Saat, dakika ve saniye **gerçek zamanlı** olarak güncellenir
* Haftanın günü (Pazartesi, Salı vb.) ekranda gösterilir
* Saate göre dinamik selamlama:

  * 06:00 – 11:59 → **Günaydın ☀️**
  * 12:00 – 17:59 → **İyi Günler 🌤️**
  * 18:00 – 05:59 → **İyi Akşamlar 🌙**

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Bootstrap 4.6**

---

## 📁 Proje Dosya Yapısı

```text
Patika-JS-Saat-Odevi/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## ⚙️ Çalışma Mantığı

1. Sayfa yüklendiğinde `prompt()` ile kullanıcıdan isim alınır
2. Alınan isim HTML içerisindeki ilgili alana yazdırılır
3. `Date()` nesnesi kullanılarak anlık zaman bilgisi alınır
4. `setInterval()` ile saat her saniye güncellenir
5. Saat bilgisine göre uygun selamlama mesajı belirlenir

---

## ▶️ Projeyi Çalıştırma

1. Proje dosyalarını bilgisayarınıza indirin
2. `index.html` dosyasını tarayıcıda açın
3. Açılan pencerede isminizi girin
4. Saat ve karşılama mesajını canlı olarak görüntüleyin

---

## 📌 Notlar

* JavaScript dosyası, HTML dosyasının **en alt kısmında** çağrılmalıdır
* Proje herhangi bir ek kütüphane gerektirmez
* Safari, Chrome ve Edge tarayıcılarında sorunsuz çalışır

---

## ✨ Geliştirme Fikirleri

* Tarih (gün/ay/yıl) eklenebilir
* Selamlamaya göre renk değişimi yapılabilir
* Kullanıcı adı `localStorage` ile saklanabilir
* Çoklu dil desteği eklenebilir

---

## 👩‍💻 Geliştirici

Bu proje **Patika.dev Frontend Web Development Patikası** JavaScript ödevi kapsamında hazırlanmıştır.

---
