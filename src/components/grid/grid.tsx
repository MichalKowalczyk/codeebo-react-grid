import React from "react";
import "./grid.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<Props> = (props: Props) => {
  return (
    <div className={`grid${props.className ? " " + props.className : ""}`}>
      {props.children}
    </div>
  )
}

export default Grid;