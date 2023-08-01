import { useNavigate, Link } from "react-router-dom";
import { CustomLink as LinkStyled } from "../../styles/form/CustomLink";
import { Button } from "../../styles/form/Button";
import { Input } from "../../styles/form/Input";
import {
  FlexDirectionColumn,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";
import { Div } from "../../styles/common/Div";
import useFocusOnMount from "../../hooks/useFocusOnMount";

export default function Login() {
  const usernameInputRef = useFocusOnMount<HTMLInputElement>();

  return (
    <FullSizeFlexCenter>
      <form
        action=""
        onSubmit={(e) => {
          alert("submitted");
        }}
      >
        <FlexDirectionColumn style={{ gap: 10 }} w="20rem">
          <Input ref={usernameInputRef} placeholder="Username" />
          <Input placeholder="Password" />
          <FlexDirectionColumn style={{ gap: 10 }} pt="0.7rem">
            <Button>Login</Button>
            <Div textAlign="center">
              <Link to={"/signup"}>
                <LinkStyled w="100%">Don't have an account yet?</LinkStyled>
              </Link>
            </Div>
          </FlexDirectionColumn>
        </FlexDirectionColumn>
      </form>
    </FullSizeFlexCenter>
  );
}
