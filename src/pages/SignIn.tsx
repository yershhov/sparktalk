import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import SignInHeading from "../components/SignIn/SignInHeading";
import SignInProviders from "../components/SignIn/SignInProviders";
import FullSizeError from "../components/states/errors/FullSizeError";
import FullSizeLoading from "../components/states/loading/FullSizeLoading";
import { SignInContext } from "../context/SignIn";
import { auth } from "../firebase/config";
const SignInPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function SignIn() {
  const [_, loading] = useAuthState(auth);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSubmitting = (value: boolean) => setSubmitting(value);
  const handleError = (error: any) => setError(error);

  if (loading || submitting) return <FullSizeLoading />;

  if (error) return <FullSizeError message={error.message} />;

  return (
    <SignInContext.Provider value={{ handleSubmitting, handleError }}>
      <SignInPageContainer>
        <SignInHeading />
        <SignInProviders />
      </SignInPageContainer>
    </SignInContext.Provider>
  );
}
