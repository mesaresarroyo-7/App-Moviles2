// Configuración de Firebase para Little Caesars
// IMPORTANTE: Reemplaza los valores con los de tu proyecto en Firebase Console
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxVq3jF1X-K6gADN-gq4AWtlTORZ5eWgI",
  authDomain: "little-caesars-f4b72.firebaseapp.com",
  databaseURL: "https://little-caesars-f4b72-default-rtdb.firebaseio.com",
  projectId: "little-caesars-f4b72",
  storageBucket: "little-caesars-f4b72.firebasestorage.app",
  messagingSenderId: "579533325081",
  appId: "1:579533325081:web:4a93b77760ec69d6193b88",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la referencia a la base de datos Realtime Database
export const database = getDatabase(app);
