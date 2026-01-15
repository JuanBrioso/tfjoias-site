// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 importa corretamente o Firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDB9qeQyz5PUbqUDhmf9lDCNvXYI7jBmHg",
    authDomain: "tfjoias-site.firebaseapp.com",
    projectId: "tfjoias-site",
    storageBucket: "tfjoias-site.appspot.com",
    messagingSenderId: "950555529309",
    appId: "1:950555529309:web:99598c86c35cf6d2267db4",
    measurementId: "G-40W95DYGBK"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore e exporta
const db = getFirestore(app); // ✅ define o `db` corretamente

export { db }; // ✅ agora a exportação vai funcionar
export const storage = getStorage(app);
