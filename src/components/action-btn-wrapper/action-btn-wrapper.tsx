import React from "react";
import "./action-btn-wrapper.scss";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  defaultBorder?: boolean;
  disabled?: boolean;
}

const ActionBtnWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`crg action-btn-wrapper ${props.defaultBorder ? "default-border" : ""} ${props.disabled ? "action-btn-wrapper--disabled" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ActionBtnWrapper;
