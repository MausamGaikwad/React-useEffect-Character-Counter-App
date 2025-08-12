# Character Counter App

A simple and interactive React application that counts the number of characters typed in real time.
Built with React Hooks and the useEffect hook to dynamically update the page title with the current character count.

---

## 🚀 Features

- Live Character Count – Updates instantly as you type.
- Dynamic Page Title – Displays the current count in the browser tab.
- Responsive Layout – Works across different screen sizes.
- Minimal & Clean UI – Focused on user input and live feedback.

---

## 🛠️ Tech Stack

- React (with Hooks)
- JavaScript (ES6+)
- HTML5 & CSS3

## 📦 Installation & Setup

```bash

# Clone the repository
git clone https://github.com/MausamGaikwad/React-useEffect-Character-Counter-App.git

# Navigate to the project folder
cd character-counter-app

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 📚 How It Works

1. User types into a textarea.
2. The app updates:
   - The on-screen character count.
   - The browser tab title with the count (via useEffect).

---

## 🧑‍💻 Code Overview

Main logic inside `CharCounter.jsx`:

```javascript
useEffect(() => {
  document.title = `Characters : ${text.length}`;
}, [text]);
```

- text.length → Tracks total characters typed.
- Dependency array [text] → Ensures the effect runs only when text changes.

---

## 📜 License

This project is licensed under the MIT License – you’re free to use, modify, and share.
