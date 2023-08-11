import { memo } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "../styles/form/Button";
import { StyledButtonProps } from "../types/props";

function LogOut(props: StyledButtonProps) {
  const { variant, width } = props;

  const logout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={logout} width={width} variant={variant}>
      Log out
    </Button>
  );
}

export const LogOutButton = memo(LogOut);
