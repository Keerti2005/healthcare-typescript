import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../auth/firebaseConfig";

export const signInWithGoogle = async (): Promise<{ user?: any; error?: string }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const signInWithGitHub = async (): Promise<{ user?: any; error?: string }> => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    return { user: result.user };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
): Promise<{ user?: any; error?: string }> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user };
  } catch (error: any) {
    return { error: error.message };
  }
};
