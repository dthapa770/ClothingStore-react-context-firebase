import { useEffect } from "react";
import { getRedirectResult } from "@firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    //   destructured response to get => {user }
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in with Google Popup</h1>
      <button onClick={logGoogleUser}> Sign In</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
