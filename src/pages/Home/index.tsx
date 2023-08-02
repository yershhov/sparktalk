import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "../../styles/form/Button";

export default function Home() {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
  if (user) return <Button onClick={logout}>Log out</Button>;

  navigate("/login");
}
