import React from "react";

export interface NumberStringTuple extends Array<string | string | number | (((x: any) => any) | undefined)> {
  0: string;
  1: string;
  2: number;
  3?: (x: any) => any;
}

interface GenericListHeaderProps {
  className?: string;
  col: NumberStringTuple;
}

const GenericListHeader: React.FC<GenericListHeaderProps> = (props) => {
  const { col: colAlias, className } = props;

  return (
    <>
      {[colAlias].map((col, index) => {
        const header = col?.[0];
        const colSize = col?.[2];
        return (
          <div className={`cell-${colSize} ${className}`} key={index}>
            <b>{header}</b>
          </div>
        );
      })}
    </>
  );
};

export default GenericListHeader;
