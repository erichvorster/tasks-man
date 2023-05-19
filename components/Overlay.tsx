import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface OverlayProps {
  children: ReactNode;
  hideOverlay: () => void;
}
export const Overlay = (props: OverlayProps) => {
  return ReactDOM.createPortal(
    <div className={"overlay"} onClick={props.hideOverlay}>
      {props.children}
    </div>,
    document.getElementById("overlay")!
  );
};
