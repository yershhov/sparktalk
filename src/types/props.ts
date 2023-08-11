import React from "react";

export interface IPropsWithChildren {
  children: React.ReactNode;
}

export interface StyledButtonProps {
  variant?: string;
  width?: string;
}
