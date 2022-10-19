import React, { CSSProperties } from "react";
import "./row.scss";

interface Props {
  gap?: 64 | 32 | 24 | 16 | 8 | 0;
  align?: "left" | "center" | "right";
  className?: string;
  style?: CSSProperties | undefined;
  children: React.ReactNode;
  debug?: boolean;
}

const Row: React.FC<Props> = (props: Props) => {
  const { children, gap = 32, className = "", align, style, debug } = props;
  return (
    <div className={`row row-gap-${gap} ${align ? "align-" + align : ""} ${debug ? "debug" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Row;
