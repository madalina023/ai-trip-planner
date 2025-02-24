 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyBx6gg0wWo_N-iouxFi4w2PVoxMxW_DUPY",
  authDomain: "ai-travel-planner-71fac.firebaseapp.com",
  projectId: "ai-travel-planner-71fac",
  storageBucket: "ai-travel-planner-71fac.appspot.com",
  messagingSenderId: "262965527802",
  appId: "1:262965527802:web:c7bcd90b6ddb49b8d57543",
  measurementId: "G-19HDCXN696",
};

 export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);