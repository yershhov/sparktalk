import { Button } from "../../styles/form/Button";
import { FullSizeFlexCenter } from "../../styles/layouts/flexLayouts";
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {
  HeadingContainer,
  Icons,
  Heading,
  SignInForm,
  TextWithLeftIcon,
  SignInPageContainer,
} from "./styled";
import { auth } from "../../firebase/config";
import FullSizeError from "../../components/states/errors/FullSizeError";
import FullSizeLoading from "../../components/states/loading/FullSizeLoading";
import { useState } from "react";
import { useAppDispatch } from "../../store";
import { authSetUser } from "../../redux/auth/authSlice";
import { User } from "../../api/models/user";
import usersService from "../../api/services/usersService";

export default function SignIn() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  function handleSignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    signInWithPopup(auth, provider)
      .then(async (res: UserCredential) => {
        const user = res.user;

        const existingUser = await usersService.getById(user.uid);

        // add the user if not
        if (!existingUser) {
          await usersService.create(user as User);
        }

        // TODO: handle errors possible above
        dispatch(authSetUser(user));
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }

  if (loading) return <FullSizeLoading />;

  if (error) return <FullSizeError message={error.message} />;

  return (
    <SignInPageContainer>
      <HeadingContainer>
        <Icons>⚛️🔥</Icons>
        <Heading>Welcome to Sparktalk!</Heading>
      </HeadingContainer>

      <FullSizeFlexCenter>
        <SignInForm>
          <Button onClick={handleSignInWithGoogle} variant="white">
            <TextWithLeftIcon style={{ gap: 6 }}>
              <FcGoogle size={"20px"} />
              Sign in with google
            </TextWithLeftIcon>
          </Button>
        </SignInForm>
      </FullSizeFlexCenter>
    </SignInPageContainer>
  );
}
