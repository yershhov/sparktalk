import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import SignIn from "../../pages/SignIn";
import { IPropsWithChildren } from "../../types/props";
import FullSizeLoading from "../states/loading/FullSizeLoading";

export default function AuthLayout(props: IPropsWithChildren) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <FullSizeLoading />;
  if (error) return <p>error!</p>;
  if (user) return props.children;

  return <SignIn />;
}
