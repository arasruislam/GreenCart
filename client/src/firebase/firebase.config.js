import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
   apiKey: import.meta.env.GREENCART_apiKey,
   authDomain: import.meta.env.GREENCART_authDomain,
   projectId: import.meta.env.GREENCART_projectId,
   storageBucket: import.meta.env.GREENCART_storageBucket,
   messagingSenderId: import.meta.env.GREENCART_messagingSenderId,
   appId: import.meta.env.GREENCART_appId,
   measurementId: import.meta.env.GREENCART_measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
