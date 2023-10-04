import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-L1lsKqPoujj27Bpqs6dvK8zY9cUrpLM",
  authDomain: "signal-20d64.firebaseapp.com",
  projectId: "signal-20d64",
  storageBucket: "signal-20d64.appspot.com",
  messagingSenderId: "234976825323",
  appId: "1:234976825323:web:f43d087ca05f8b376693ae",
  measurementId: "G-JBBYKG5XP7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// const analytics = getAnalytics(app);
