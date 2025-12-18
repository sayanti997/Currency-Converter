# 💱 Currency Converter Web App

A simple, responsive **Currency Converter** built using **HTML, CSS, and JavaScript**. The application allows users to convert amounts between different currencies using a live exchange‑rate API and displays country flags dynamically.

---

## 📌 Features

* 🌍 Convert between multiple international currencies
* 🔄 Real‑time exchange rates using a public API
* 🇺🇸 Dynamic country flags based on selected currency
* 🎨 Modern UI with gradient background and hover effects
* 📱 Fully responsive design (mobile, tablet, desktop)
* ⚡ Fast and lightweight (no frameworks)

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling, Flexbox layout, gradients, responsiveness
* **JavaScript (ES6)** – Logic, DOM manipulation, API handling
* **Currency API** – Live exchange rates
* **Flags API** – Country flag images

---


## 🌐 APIs Used

### 🔹 Currency Exchange API

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
```

Example endpoint:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

### 🔹 Flags API

```
https://flagsapi.com/{COUNTRY_CODE}/flat/64.png
```

---

## ⚙️ How It Works

1. User enters an amount
2. Selects **From** and **To** currencies
3. App fetches exchange rate from API
4. Calculates converted amount
5. Updates result text and country flags dynamically

---

## 🧪 Example JavaScript Logic

```js
const url = `${BASE_URL}/${fromCurrency}.json`;
const response = await fetch(url);
const data = await response.json();
const rate = data[fromCurrency][toCurrency];
```

---

## 🎨 Responsive Design

* Uses **Flexbox** for layout
* Media queries for mobile and tablet screens
* Relative units like `%`, `vh`, `rem`

---




