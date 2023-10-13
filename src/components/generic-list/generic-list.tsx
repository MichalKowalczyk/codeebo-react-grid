import React, { useEffect, useState } from "react";
import GenericListCell from "./generic-list-cell";
import GenericListHeader from "./generic-list-header";
import GenericListStatus from "./generic-list-status";
import isEqual from "react-fast-compare";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./generic-list.scss";

export interface NumberStringTuple extends Array<string | string | number | (((x: any) => any) | undefined)> {
  0: string;
  1: string;
  2: number;
  3?: (x: any) => any;
}

interface GenericListProps {
  data: Array<object> | undefined;
  cols: Array<NumberStringTuple>;
  rowChildren?: (x: any) => React.ReactNode;
  rowClassName?: (x: any) => string;
  hideHeader?: boolean;
  actions?: NumberStringTuple;
  status?: "default" | "loading" | "finished" | "failed";
  inputProps?: {
    onChange: (value: Array<object> | object) => void;
    initValues?: Array<object>;
    multiselect?: boolean;
  };
}

const GenericList = (props: GenericListProps) => {
  const { data, cols, actions, inputProps, status = "default", rowClassName, rowChildren, hideHeader } = props;
  const [selectItems, setSelectItems] = useState<Array<object>>([]);

  useEffect(() => {
    if (status === "finished" && inputProps && (inputProps as any).onChange && inputProps.initValues) {
      setSelectItems((state) => (inputProps?.initValues ? inputProps?.initValues : state));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (inputProps) {
      if (inputProps.multiselect) {
        inputProps.onChange(selectItems);
      } else if (selectItems.length > 0) {
        inputProps.onChange(selectItems[0]);
      }
    }
  }, [selectItems, inputProps]);

  const handleClickAction = (_e: any) => {
    // e.stopPropagation();
  };

  const selectRow = (_e: any, row: object, isSelected: boolean | undefined) => {
    if (inputProps) {
      if (isSelected) {
        const newSelectedItems = selectItems.filter((x: any) => !isEqual(x, row));
        setSelectItems(newSelectedItems);
      } else if (inputProps.multiselect) {
        setSelectItems((state) => {
          return [...state, row];
        });
      } else {
        setSelectItems([row]);
      }
    }
  };

  return (
    <div className={`generic-list ${inputProps ? "selectable" : ""}${inputProps?.multiselect ? " multiselect" : ""}`}>
      {hideHeader ? null : (
        <div className="headers-row">
          {inputProps ? <div className="select-icon"></div> : null}
          {cols
            ? cols.map((col, col_index: number) => {
                return <GenericListHeader col={col} key={col_index} />;
              })
            : null}
          {actions ? <GenericListHeader col={actions} className="actions" /> : null}
        </div>
      )}
      <div className={`list-row-wrapper`}>
        {data && data.length > 5 ? (
          <div className={`loader ${status === "loading" ? "loader--active" : ""}`}>
            <LoadingSpinner size="xxl" active={status === "loading"} invert={true} className="spinner" />
          </div>
        ) : null}
        {data
          ? data.map((row: any, row_index: number) => {
              const isSelected = inputProps && selectItems.findIndex((x: any) => isEqual(x, row)) !== -1;
              return (
                <React.Fragment key={row_index}>
                  <div key={row_index} className={`list-row ${rowClassName ? rowClassName(row) : ""} ${isSelected ? "selected" : ""}`} onClick={inputProps ? (e) => selectRow(e, row, isSelected) : undefined}>
                    {inputProps ? <div className="select-icon"></div> : null}
                    {cols
                      ? cols.map((col, col_index: number) => {
                          return <GenericListCell hideHeader className="standard-col" col={col} row={row} key={col_index} />;
                        })
                      : null}
                    {actions ? <GenericListCell hideHeader col={actions} row={row} className="actions" onClick={handleClickAction} /> : null}
                  </div>
                  {rowChildren && rowChildren(row) ? <div className="list-row-children">{rowChildren(row)}</div> : null}
                </React.Fragment>
              );
            })
          : null}
        <GenericListStatus status={status} data={data} />
      </div>
    </div>
  );
};

export default GenericList;
