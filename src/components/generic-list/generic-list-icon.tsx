import React from "react";

interface GenericListIconProps {
  className?: string;
  img: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  openOnClick?: boolean;
}

const GenericListIcon: React.FC<GenericListIconProps> = (props) => {
  const { className, img, size = "md", openOnClick } = props;
  return (
    <div className={`generic-list-icon generic-list-icon__size--${size} ${className}`} style={{ backgroundImage: `url(${img})` }}>
      {openOnClick ? (
        <a className="generic-list-icon--a" href={img} target="_blank" rel="noreferrer">
          <div style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
        </a>
      ) : null}
    </div>
  );
};

export default GenericListIcon;
