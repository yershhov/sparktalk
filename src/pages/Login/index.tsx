import { Link } from "../../styles/common/Link";
import { Button } from "../../styles/form/Button";
import { Input } from "../../styles/form/Input";
import {
  FlexDirectionColumn,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";

export default function Login() {
  return (
    <FullSizeFlexCenter>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          alert("submitted");
        }}
      >
        <FlexDirectionColumn style={{ gap: 10 }} w="20rem">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <FlexDirectionColumn style={{ gap: 10 }} pt="0.7rem">
            <Button>Login</Button>
            <Link textAlign="center" fontSize="13px" color="#999">
              Don't have an account yet?
            </Link>
          </FlexDirectionColumn>
        </FlexDirectionColumn>
      </form>
    </FullSizeFlexCenter>
  );
}
