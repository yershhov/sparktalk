import { memo } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "../styles/form/Button";

function LogOut() {
  const logout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={logout}>Log out</Button>;
}

export const LogOutButton = memo(LogOut);
