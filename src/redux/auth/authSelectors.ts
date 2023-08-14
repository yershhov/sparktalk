import { useAppSelector } from "../../store";

export function authUserSelector() {
  return useAppSelector((state) => state.auth.user);
}
