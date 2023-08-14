import SignIn from "../../pages/SignIn";
import Home from "../../pages/Home";
import { authUserSelector } from "../../redux/auth/authSelectors";

export default function Authenticator() {
  const user = authUserSelector();

  return user ? <Home /> : <SignIn />;
}
