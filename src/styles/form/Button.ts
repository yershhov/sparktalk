import { styled } from "styled-components";

export const Button = styled.button<{ variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => {
    if (props.variant === "white") {
      return props.theme.colors.white;
    }
    return props.theme.colors.primary;
  }};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 0 1rem;
  height: 2.6rem;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
  ${(props) =>
    props.variant === "white" ? { color: props.theme.colors.black } : null}

  &:hover {
    background: ${(props) => {
      if (props.variant === "white") {
        return props.theme.colors.whiteAlpha70;
      }
      return props.theme.colors.primaryAlpha70;
    }};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px
      ${(props) => {
        if (props.variant === "white") {
          return props.theme.colors.primary;
        }
        return props.theme.colors.primaryAlpha70;
      }};
  }
`;
