import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface OverlayProps {
  children: ReactNode;

}
export const Overlay = (props: OverlayProps) => {
  return ReactDOM.createPortal(
    <div className={"overlay"} >
      <div className="">
      {props.children}
      </div>
    </div>,
    document.getElementById("overlay")!
  );
};
