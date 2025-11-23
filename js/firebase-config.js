// js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDexample...your-real-config-here",
  authDomain: "artful-platform.firebaseapp.com",
  projectId: "artful-platform-12345",
  storageBucket: "artful-platform.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Инициализируем Firebase
firebase.initializeApp(firebaseConfig);

// Создаем ссылку на базу данных
const db = firebase.firestore();