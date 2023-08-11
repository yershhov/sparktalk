import { useCallback, useEffect, useRef, useState } from "react";
import { LogOutButton } from "../../LogOutButton";
import { screens } from "../../../styles/screens";
import { useMediaQuery } from "usehooks-ts";
import { SidebarStyled, SidebarContent, SidebarResizer } from "./styled";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  const matches = useMediaQuery(screens.md);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            (sidebarRef.current! as HTMLElement).getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <SidebarStyled
      ref={sidebarRef}
      width={sidebarWidth}
      onMouseDown={(e) => e.preventDefault()}
    >
      <SidebarContent>
        <LogOutButton width="100%" />
        <div style={{ height: "5rem", width: "100%", background: "gray" }} />
      </SidebarContent>
      {matches && <SidebarResizer onMouseDown={startResizing} />}
    </SidebarStyled>
  );
}
