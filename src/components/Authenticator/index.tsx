import SignIn from "../../pages/SignIn";
import Home from "../../pages/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

export default function Authenticator() {
  const [user] = useAuthState(auth);

  return user ? <Home /> : <SignIn />;
}
