import { Button } from "../../styles/form/Button";
import { FullSizeFlexCenter } from "../../styles/layouts/flexLayouts";
import useFocusOnMount from "../../hooks/useFocusOnMount";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {
  HeadingContainer,
  Icons,
  Heading,
  SignInForm,
  TextWithLeftIcon,
  SignInPageContainer,
} from "./styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import FullSizeLoading from "../../components/states/loading/FullSizeLoading";
import FullSizeError from "../../components/states/errors/FullSizeError";

export default function SignIn() {
  const signInButtonRef = useFocusOnMount<HTMLButtonElement>();

  const [loading, error] = useAuthState(auth);

  async function handleClick() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }
  if (loading) return <FullSizeLoading />;

  if (error) return <FullSizeError />;

  return (
    <SignInPageContainer>
      <HeadingContainer>
        <Icons>⚛️🔥</Icons>
        <Heading>Welcome to Sparktalk!</Heading>
      </HeadingContainer>
      <FullSizeFlexCenter>
        <SignInForm>
          {/* <FlexDirectionColumn style={{ gap: 10 }}> */}
          <Button ref={signInButtonRef} onClick={handleClick} variant="white">
            <TextWithLeftIcon style={{ gap: 6 }}>
              <FcGoogle size={"20px"} />
              Sign in with google
            </TextWithLeftIcon>
          </Button>
          {/* </FlexDirectionColumn> */}
        </SignInForm>
      </FullSizeFlexCenter>
    </SignInPageContainer>
  );
}
