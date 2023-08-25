import { createContext } from "react";

interface ISignInContext {
  handleSubmitting: (value: boolean) => void;
  handleError: (error: any) => void;
}

const initialState = {
  handleSubmitting: () => {},
  handleError: () => {},
};

export const SignInContext = createContext<ISignInContext>(initialState);
