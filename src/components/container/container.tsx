import React from "react";
import "./container.scss";

interface Props {
  children: React.ReactNode;
  isRaw?: boolean;
  className?: string;
  size?: "regular" | "large" | "fluid";
}

const Container: React.FC<Props> = (props: Props) => {
  const { children, size = "regular" } = props;
  return <div className={`container container-${size} ${props.isRaw ? " isRaw" : ""}${props.className ? " " + props.className : ""}`}>{children}</div>;
};

export default Container;