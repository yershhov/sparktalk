import { memo } from "react";
import { Button } from "../styles/form/Button";
import { StyledButtonProps } from "../types/props";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { authSetUser } from "../redux/auth/authSlice";
import { useAppDispatch } from "../store";

function LogOut(props: StyledButtonProps) {
  const { variant, width } = props;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  async function logout() {
    await signOut(auth);
    dispatch(authSetUser(null));
    navigate("/");
    localStorage.removeItem("token");
  }

  return (
    <Button onClick={logout} width={width} variant={variant}>
      Log out
    </Button>
  );
}

export const LogOutButton = memo(LogOut);
