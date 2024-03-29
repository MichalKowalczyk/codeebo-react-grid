import React, { useRef, useState } from "react";
import ActionBtnWrapper from "../action-btn-wrapper/action-btn-wrapper";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./menu.scss";

export interface ItemInput {
  label: string | React.ReactNode;
  customRender?: React.ReactNode;
  onAction: () => any;
}
export type MenuItemType = ItemInput | { customRender: React.ReactNode } | null;

interface Props {
  items: Array<MenuItemType>;
  children?: React.ReactNode;
  minWidth?: number;
  header?: string;
  isPrimary?: boolean;
  disabled?: boolean;
  className?: string;
}

const Menu: React.FC<Props> = (props: Props) => {
  const { items, children, disabled = undefined, minWidth, header, isPrimary, className="" } = props;
  const filteredNullItems = items.filter((n) => n) as Array<ItemInput>;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    if (isOpen) setIsOpen(false);
    else {
      // e.stopPropagation();
      setIsOpen(true);
    }
  };

  return filteredNullItems.length > 0 ? (
    <div className={`crg select-menu ${className}`}>
      <div>
        <summary className={disabled ? "summary--disabled" : ""} onClick={open}>
          {children ? (
            <>{children}</>
          ) : (
            <ActionBtnWrapper defaultBorder disabled={disabled}>
              <div className={`action-btn ${isPrimary ? "primary" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="12" height="12" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5H0V1.5H12V2.5Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5H0V9.5H12V10.5Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5H0V5.5H12V6.5Z" fill="black" />
                </svg>
              </div>
            </ActionBtnWrapper>
          )}
        </summary>
        {isOpen ? <ActionListWrapper isOpen={isOpen} items={filteredNullItems} setIsOpen={setIsOpen} header={header} minWidth={minWidth} /> : null}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Menu;

interface ActionListWrapperProps {
  items: ItemInput[];
  minWidth?: number;
  header?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ActionListWrapper: React.FC<ActionListWrapperProps> = (props: ActionListWrapperProps) => {
  const { items, setIsOpen, minWidth, header, isOpen } = props;
  const mounted: any = useRef({
    isMounted: false,
  });

  const ref: any = useDetectClickOutside({
    onTriggered: () => {
      if (mounted.current.isMounted) setIsOpen((state) => (state === true ? false : true));
      else mounted.current.isMounted = true;
    },
  });

  return (
    <div className={`crg select-menu__modal ${isOpen ? "select-menu__modal--open" : ""}`} style={{ minWidth: minWidth ? minWidth : "128px", width: "auto" }} ref={ref}>
      {header && <div className="select-menu__modal__header">{header}</div>}
      <div onClick={() => setIsOpen(false)} className="select-menu__modal__items">
        {items.map((x: ItemInput, index: number) => {
          return (
            <div key={index}>
              {x.customRender ? x.customRender : null}
              {x.onAction ? (
                <div className="select-menu__modal__item" onClick={x.onAction}>
                  <div>{x.label}</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
