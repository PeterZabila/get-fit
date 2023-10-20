import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "get-fit-70eb5.firebaseapp.com",
  projectId: "get-fit-70eb5",
  storageBucket: "get-fit-70eb5.appspot.com",
  messagingSenderId: "164300869682",
  appId: "1:164300869682:web:dff3946b6760f5b87c6c2b"
};

 const app = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider();
 const auth = getAuth(app);
 export { auth, provider, app };

 export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name: string | null = result.user.displayName;
      const email: string | null = result.user.email;
      const profilePic: string | null = result.user.photoURL;
      
    if(name) {
      localStorage.setItem("name", name);
    }
    if(email) {
      localStorage.setItem("email", email);
    }
    if(profilePic) {
      localStorage.setItem("profilePic", profilePic);
    }

    })
    .catch(() => console.log("error")
    );
};