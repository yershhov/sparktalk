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
import { User } from "../../api/models/user";
import usersService from "../../api/services/usersService";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignIn() {
  const [_, loading] = useAuthState(auth);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<any>(null);

  function handleSignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    setSubmitting(true);

    signInWithPopup(auth, provider)
      .then(async (res: UserCredential) => {
        const user = res.user;

        const existingUser = await usersService.getById(user.uid);

        // add the user if not
        if (!existingUser) {
          await usersService.create(user as User);
        }

        // TODO: handle errors possible above
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setSubmitting(false));
  }

  if (loading || submitting) return <FullSizeLoading />;

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
