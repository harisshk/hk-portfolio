import firebase from "firebase/app";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAWqTIxZ17GSuHQ1iq9faeZeKNpo-wYWvo",
    authDomain: "portfolio-harishk.firebaseapp.com",
    projectId: "portfolio-harishk",
    storageBucket: "portfolio-harishk.appspot.com",
    messagingSenderId: "672766481098",
    appId: "1:672766481098:web:8602b570aea43c05ee5a33",
    measurementId: "G-QC8MGZSM5K"
};
firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();