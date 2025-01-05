import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPIXLn6FwPdLlCVrZx-HpVmnk8E-v5Mq0",
  authDomain: "blackpro-f6207.firebaseapp.com",
  projectId: "blackpro-f6207",
  storageBucket: "blackpro-f6207.firebasestorage.app",
  messagingSenderId: "421473667987",
  appId: "1:421473667987:web:679ebb11be3c63990cb666",
  measurementId: "G-HET33JHMZP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };