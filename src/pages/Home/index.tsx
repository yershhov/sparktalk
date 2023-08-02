import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogOutButton } from "../../components/LogOutButton";
import SignIn from "../SignIn";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
  if (user) return <LogOutButton />;

  return <SignIn />;
}
