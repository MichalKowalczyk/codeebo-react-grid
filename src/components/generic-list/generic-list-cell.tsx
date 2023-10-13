import React from "react";

export interface NumberStringTuple extends Array<string | string | number | (((x: any) => any) | undefined)> {
  0: string;
  1: string;
  2: number;
  3?: (x: any) => any;
}

interface GenericListCellProps {
  className?: string;
  col: NumberStringTuple;
  row: Object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  actionsDisabled?: boolean;
}

const GenericListCell: React.FC<GenericListCellProps> = (props) => {
  const { row, col: colAlias, className, onClick } = props;

  return (
    <>
      {[colAlias].map((col, index: number) => {
        const field = col?.[1];
        const colSize = col?.[2];
        const func = col?.[3];
        return (
          <div className={`cell-${colSize} ${className}`} key={index} onClick={onClick}>
            <b className="only-mobile-header-in-row">{colAlias[0]}</b>
            {func ? func(field ? (row as any)[field] : (row as any)) : (row as any)[field]}
          </div>
        );
      })}
    </>
  );
};

export default GenericListCell;
