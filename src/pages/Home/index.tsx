import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
  if (user) return <div>Home</div>;

  navigate("/login");
}
