import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMnXVuGj-Qvd_m3J8BT4bpfJtgNw_CAOE",
  authDomain: "maltimart-9cf93.firebaseapp.com",
  projectId: "maltimart-9cf93",
  storageBucket: "maltimart-9cf93.appspot.com",
  messagingSenderId: "450662538400",
  appId: "1:450662538400:web:45bd29858e44df5f7c3dc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
