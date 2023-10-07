import React from "react";
import "./action-btn-wrapper.scss";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  defaultBorder?: boolean;
  disabled?: boolean;
  className?: string;
}

const ActionBtnWrapper: React.FC<Props> = (props: Props) => {
  const {defaultBorder, disabled, className="", children, onClick} = props;
  return (
    <div
      className={`crg action-btn-wrapper ${defaultBorder ? "default-border" : ""} ${disabled ? "action-btn-wrapper--disabled" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ActionBtnWrapper;
