import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const isFirebaseConfigured = !!import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const googleProvider = new GoogleAuthProvider();

//handle sign in
export const handleSignIn = async () => {
  if (!auth) return alert("Firebase not configured!");
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user, "User signed in");
    return result.user;
  } catch (error) {
    console.error(error, "Error signing in");
  }
};

//handle submite comment
export const submitComment = async (text: string) => {
  if (!auth || !auth.currentUser) return alert("Please sign in first!");
  if (!db) return alert("Database not initialized!");

  try {
    await addDoc(collection(db, "comments"), {
      text: text,
      userId: auth.currentUser.uid,
      userName: auth.currentUser.displayName,
      createdAt: serverTimestamp(),
    });
    alert("Comment submitted!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export { isFirebaseConfigured };
