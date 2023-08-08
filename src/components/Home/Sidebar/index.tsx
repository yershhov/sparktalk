import { useCallback, useEffect } from "react";
import { useState, useRef } from "react";
// import "./Sidebar.css";
import styled from "styled-components";

const SidebarStyled = styled.div<{ width: number }>`
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 200px;
  max-width: 70%;
  display: flex;
  border-right: ${(props) => props.theme.colors.secondary} 1px solid;
  flex-direction: row;
  z-index: 2;
  width: ${(props) => props.width + "px"};
`;

const SidebarContent = styled.div`
  flex: 1;
`;

const SidebarResizer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  justify-self: flex-end;
  cursor: col-resize;
  resize: horizontal;
  width: 1px;
`;

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            (sidebarRef.current! as HTMLElement).getBoundingClientRect().left
        );
      }
    },
    [isResizing, sidebarRef.current]
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
        <div
          style={{ width: "100%", height: "5rem", background: "gray" }}
        ></div>
      </SidebarContent>
      <SidebarResizer onMouseDown={startResizing} />
    </SidebarStyled>
  );
}
