// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwittersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwittersvgIcon(props: TwittersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 24 24"}
      data-name={"Flat Line"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-line"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.94 7.91a3.49 3.49 0 00-6.94.26C8.46 9.63 5 6 5 6c-1 6 2 8.75 2 8.75C5.64 16 3 16 3 16s1.58 3 8.58 3S19 11 19 11a3.08 3.08 0 002-3.3 7.9 7.9 0 01-2.06.21z"
        }
        fill={"#2ca9bc"}
      ></path>

      <path
        d={
          "M18.94 7.91a3.49 3.49 0 00-6.94.26C8.46 9.63 5 6 5 6c-1 6 2 8.75 2 8.75C5.64 16 3 16 3 16s1.58 3 8.58 3S19 11 19 11a3.08 3.08 0 002-3.3 7.9 7.9 0 01-2.06.21z"
        }
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default TwittersvgIcon;
/* prettier-ignore-end */
