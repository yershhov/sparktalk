import { Icons } from "../../../pages/SignIn/styled";
import {
  FlexAlignCenter,
  FlexDirectionColumn,
  FlexJustifyCenter,
  FullSizeFlexCenter,
} from "../../../styles/layouts/flexLayouts";
import Loading from "./Loading";

export default function FullSizeLoading() {
  return (
    <FullSizeFlexCenter>
      <FlexDirectionColumn>
        <Icons>⚛️🔥</Icons>
        <FlexJustifyCenter full>
          <Loading />
        </FlexJustifyCenter>
      </FlexDirectionColumn>
    </FullSizeFlexCenter>
  );
}
