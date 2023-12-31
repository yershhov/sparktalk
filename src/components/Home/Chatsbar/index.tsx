import { useCallback, useEffect, useRef, useState } from "react";
import { screens } from "../../../styles/screens";
import { useMediaQuery } from "usehooks-ts";
import { ChatsbarContainer, ChatsbarContent, ChatsbarResizer } from "./styled";
import { useNavigate } from "react-router-dom";
import ChatsbarHeader from "./components/ChatsbarHeader";
import { LogOutButton } from "../../common/LogOutButton";

export default function Chatsbar() {
  const navigate = useNavigate();

  const sidebarRef = useRef(null);
  const resizerRef = useRef(null);

  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [mouseDownWithinResizer, setMouseDownWithinResizer] = useState(false);

  const matches = useMediaQuery(screens.md);

  const stopResizing = useCallback(() => {
    setMouseDownWithinResizer(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (mouseDownWithinResizer) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            (sidebarRef.current! as HTMLElement).getBoundingClientRect().left
        );
      }
    },
    [mouseDownWithinResizer]
  );

  const mouseDown = useCallback(
    (mouseDown: MouseEvent) => {
      if (resizerRef.current!) {
        const { left, top, width, height } = (
          resizerRef.current! as HTMLDivElement
        ).getBoundingClientRect();

        const { clientX, clientY } = mouseDown;

        const isInside =
          clientX >= left &&
          clientX <= left + width &&
          clientY >= top &&
          clientY <= top + height;

        if (isInside) {
          setMouseDownWithinResizer(true);
        }
      }
    },
    [resizerRef.current!]
  );

  useEffect(() => {
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.addEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize]);

  return (
    <ChatsbarContainer
      ref={sidebarRef}
      width={sidebarWidth}
      onMouseDown={(e) => {
        if (mouseDownWithinResizer) {
          e.preventDefault();
        }
      }}
    >
      <ChatsbarContent>
        <ChatsbarHeader />
        <LogOutButton />
        <div
          style={{
            height: "5rem",
            width: "100%",
            background: "gray",
            cursor: "pointer",
          }}
          onClick={() => navigate("/ada")}
        />
      </ChatsbarContent>
      {matches && <ChatsbarResizer ref={resizerRef} />}
    </ChatsbarContainer>
  );
}
