import { Icons } from "../../../styles/common/Icons";
import {
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
