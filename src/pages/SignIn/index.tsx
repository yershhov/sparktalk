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
} from "./styled";

export default function SignIn() {
  const signInButtonRef = useFocusOnMount<HTMLButtonElement>();

  async function handleClick() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <HeadingContainer>
        <Icons>⚛️🔥</Icons>
        <Heading>Welcome to SparkTalk!</Heading>
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
    </div>
  );
}
