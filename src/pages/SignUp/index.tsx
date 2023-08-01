import { Link } from "react-router-dom";
import { CustomLink as LinkStyled } from "../../styles/form/CustomLink";
import { Button } from "../../styles/form/Button";
import { Input } from "../../styles/form/Input";
import {
  FlexDirectionColumn,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";
import { Div } from "../../styles/common/Div";
import useFocusOnMount from "../../hooks/useFocusOnMount";
import { SimpleErrorMessage } from "../../styles/common/SimpleErrorMessage";

export default function SignUp() {
  const initialFocusRef = useFocusOnMount<HTMLInputElement>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FullSizeFlexCenter>
      <form onSubmit={() => onSubmit({})}>
        <FlexDirectionColumn style={{ gap: 10 }} w="20rem">
          <Input ref={initialFocusRef} placeholder="Email*" />

          <Input placeholder="Password*" />

          <Input placeholder="Confirm password*" />

          <FlexDirectionColumn style={{ gap: 10 }} pt="0.7rem">
            <SimpleErrorMessage>
              * Fill all the fields required.
            </SimpleErrorMessage>

            <Button type="submit">Sign Up</Button>
            <Div textAlign="center">
              <Link to={"/login"}>
                <LinkStyled w="100%">Already have an account?</LinkStyled>
              </Link>
            </Div>
          </FlexDirectionColumn>
        </FlexDirectionColumn>
      </form>
    </FullSizeFlexCenter>
  );
}
