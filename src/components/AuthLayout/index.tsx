import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import SignIn from "../../pages/SignIn";
import { IPropsWithChildren } from "../../types/props";
import CenteredLoading from "../common/CenteredLoading";

export default function AuthLayout(props: IPropsWithChildren) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <CenteredLoading />;
  if (error) return <p>error!</p>;
  if (user) return props.children;

  return <SignIn />;
}
