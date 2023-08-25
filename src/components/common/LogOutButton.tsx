import { memo } from "react";
import { Button } from "../../styles/form/Button";
import { StyledButtonProps } from "../../types/props";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function LogOut(props: StyledButtonProps) {
  const { variant, width } = props;

  const navigate = useNavigate();

  async function logout() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <Button onClick={logout} width={width} variant={variant}>
      Log out
    </Button>
  );
}

export const LogOutButton = memo(LogOut);
