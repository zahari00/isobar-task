import { ReactChild } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: ReactChild }) => {
  return <div>{createPortal(children, document.body)}</div>;
};
