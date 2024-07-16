import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmLsyOLOuP91dGAsFjfpBz_HQ6I1kFlXQ",
    authDomain: "fir-with-auth-d5503.firebaseapp.com",
    projectId: "fir-with-auth-d5503",
    storageBucket: "fir-with-auth-d5503.appspot.com",
    messagingSenderId: "669330813731",
    appId: "1:669330813731:web:6c1c2af70fc8e1a7291296",
    measurementId: "G-TZTBE55K79"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();