import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyCZvJL3Eb6wiJlbB5PcCG6xHtdW6KH9LiU",
    authDomain: "brasileis-9a278.firebaseapp.com",
    databaseURL: "https://brasileis-9a278.firebaseio.com",
    projectId: "brasileis-9a278",
    storageBucket: "brasileis-9a278.appspot.com",
    messagingSenderId: "333116093929",
    appId: "1:333116093929:web:d82e99a416929db3bc0778"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);