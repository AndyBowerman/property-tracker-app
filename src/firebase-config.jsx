import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzE4UuEwn8X_yKYReBXtT2K_89S3yIXQo",
    authDomain: "property-tracker-52c55.firebaseapp.com",
    projectId: "property-tracker-52c55",
    storageBucket: "property-tracker-52c55.appspot.com",
    messagingSenderId: "344456487446",
    appId: "1:344456487446:web:ca1b1fa17dab4ba79b8b37",
    measurementId: "G-21E3XL3PMR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);