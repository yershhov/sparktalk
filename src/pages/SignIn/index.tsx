import { Button } from "../../styles/form/Button";
import {
  FlexCenter,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";
import useFocusOnMount from "../../hooks/useFocusOnMount";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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
    <FullSizeFlexCenter>
      <FlexCenter style={{ gap: 10 }} w="15rem">
        <Button ref={signInButtonRef} onClick={handleClick}>
          Sign in with google
        </Button>
      </FlexCenter>
    </FullSizeFlexCenter>
  );
}
