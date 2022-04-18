import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

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
    </div>
  );
};

export default SignIn;
