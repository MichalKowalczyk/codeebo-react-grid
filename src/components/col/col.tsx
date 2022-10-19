import React, { CSSProperties } from "react";
import "./col.scss";

interface Props {
  children?: React.ReactNode;
  size: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  offset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined>;
  className?: string;
  style?: CSSProperties | undefined;
}

const Col: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { children, size, className, offset, style } = props;

  const setSize = (): string => {
    return "col-" + (Array.isArray(size) ? size[0] : size).toString();
  };

  const setMdSize = (): string => {
    if (Array.isArray(size) && size.length >= 2) {
      return " col-md-" + size[1].toString();
    } else return "";
  };

  const setSmSize = (): string => {
    if (Array.isArray(size) && size.length >= 3) {
      return " col-sm-" + size[2].toString();
    } else return "";
  };

  const setXsSize = (): string => {
    if (Array.isArray(size) && size.length >= 4) {
      return " col-xs-" + size[3].toString();
    } else return "";
  };

  const setOffset = (): string => {
    return offset ? " col-offset-" + (Array.isArray(offset) ? offset[0] : offset) : "";
  };

  const setMdOffset = (): string => {
    if (Array.isArray(offset) && offset.length >= 2 && offset[1] !== undefined) {
      return " col-md-offset-" + offset[1].toString();
    } else return "";
  };

  const setSmOffset = (): string => {
    if (Array.isArray(offset) && offset.length >= 3 && offset[2] !== undefined) {
      return " col-sm-offset-" + offset[2].toString();
    } else return "";
  };

  const setXsOffset = (): string => {
    if (Array.isArray(offset) && offset.length >= 4 && offset[3] !== undefined) {
      return " col-xs-offset-" + offset[3].toString();
    } else return "";
  };

  const setClassName = (): string => {
    return className ? " " + className : "";
  };

  return (
    <div className={`col ${setSize()}${setMdSize()}${setSmSize()}${setXsSize()}${setOffset()}${setMdOffset()}${setSmOffset()}${setXsOffset()}${setClassName()}`} style={style}>
      {children ? children : null}
    </div>
  );
};

export default Col;