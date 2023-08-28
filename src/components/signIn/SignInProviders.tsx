import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import { Button } from "../../styles/form/Button";
import {
  FlexCenter,
  FlexAlignCenter,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import usersService from "../../api/services/usersService";
import { auth } from "../../firebase/config";
import { User } from "../../api/models/user";
import { useContext } from "react";
import { SignInContext } from "../../context/signIn";

const SignInProviderButtons = styled(FlexCenter)`
  /* background: ${(props) => props.theme.colors.secondary}; */
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
`;

const TextWithLeftIcon = styled(FlexAlignCenter)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
`;

export default function SignInProviders() {
  const { handleSubmitting, handleError } = useContext(SignInContext);

  function handleSignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    handleSubmitting(true);

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
        handleError(error);
      })
      .finally(() => handleSubmitting(false));
  }

  return (
    <FullSizeFlexCenter>
      <SignInProviderButtons>
        <Button onClick={handleSignInWithGoogle} variant="white">
          <TextWithLeftIcon style={{ gap: 6 }}>
            <FcGoogle size={"20px"} />
            Sign in with google
          </TextWithLeftIcon>
        </Button>
      </SignInProviderButtons>
    </FullSizeFlexCenter>
  );
}
