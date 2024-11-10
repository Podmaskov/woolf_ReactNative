import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIoDC6IfzHYU_X9l488g1KT_UExtwl8wY",
  authDomain: "woolfrn-80a11.firebaseapp.com",
  projectId: "woolfrn-80a11",
  storageBucket: "gs://woolfrn-80a11.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
