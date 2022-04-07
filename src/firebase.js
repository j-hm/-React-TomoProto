import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjYHcBIpEyfYvqMxF8WZbfZU2bs6SW0as",
  authDomain: "chattand-9a8a9.firebaseapp.com",
  databaseURL: "https://chattand-9a8a9-default-rtdb.firebaseio.com",
  projectId: "chattand-9a8a9",
  storageBucket: "chattand-9a8a9.appspot.com",
  messagingSenderId: "1061398696653",
  appId: "1:1061398696653:web:9a6c5e04d9d675e0b74f84",
  measurementId: "G-XBHNK4V5ED",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
