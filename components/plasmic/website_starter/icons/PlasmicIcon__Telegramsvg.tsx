// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TelegramsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TelegramsvgIcon(props: TelegramsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"256"} cy={"256"} r={"247.983"} fill={"#47b0d3"}></circle>

      <path
        d={
          "M290.205 495.432c-136.957 0-247.983-111.026-247.983-247.983 0-109.992 71.618-203.243 170.76-235.705C96.531 32.113 8.017 133.715 8.017 256c0 136.957 111.026 247.983 247.983 247.983 26.965 0 52.918-4.32 77.223-12.278a249.618 249.618 0 01-43.018 3.727z"
        }
        fill={"#3298ba"}
      ></path>

      <path
        fill={"#b2b2b2"}
        d={"M188.632 401.37l-19.693-118.159 206.777-167.392z"}
      ></path>

      <path
        fill={"#ccc"}
        d={"M213.247 297.981L188.632 401.37l187.084-285.551z"}
      ></path>

      <g fill={"#e5e5e5"}>
        <path
          d={
            "M213.247 297.981l162.469-182.162-14.345 243.849c-.204 3.472-3.846 5.643-6.997 4.172l-141.127-65.859z"
          }
        ></path>

        <path
          d={
            "M375.716 115.819L100.053 244.145c-3.843 1.789-3.779 7.275.105 8.973l68.781 30.091 206.777-167.39z"
          }
        ></path>
      </g>

      <path
        d={
          "M490.626 153.442c-13.697-31.292-33.236-59.158-58.073-82.819a8.015 8.015 0 00-11.335.275 8.015 8.015 0 00.275 11.333c48.024 45.751 74.473 107.464 74.473 173.769 0 132.318-107.648 239.967-239.967 239.967S16.033 388.318 16.033 256 123.682 16.033 256 16.033c48.336 0 94.93 14.306 134.742 41.369a8.017 8.017 0 009.014-13.259C357.274 15.265 307.564 0 256 0 187.62 0 123.333 26.628 74.981 74.981 26.629 123.333 0 187.62 0 256s26.629 132.667 74.981 181.019C123.333 485.372 187.62 512 256 512s132.667-26.628 181.019-74.981C485.371 388.667 512 324.38 512 256c0-35.652-7.191-70.158-21.374-102.558z"
        }
      ></path>

      <path
        d={
          "M383.726 115.603c-.159-5.676-6.255-9.427-11.393-7.051l-154.176 71.771a8.017 8.017 0 00-3.884 10.652c1.868 4.014 6.638 5.755 10.65 3.885l95.106-44.274-46.237 37.431-106.107 85.896-58.036-25.392 81.326-37.858c4.014-1.869 5.753-6.638 3.884-10.652s-6.639-5.755-10.65-3.885l-87.54 40.752a12.962 12.962 0 00-7.474 12.035 12.954 12.954 0 007.748 11.55l64.802 28.35 18.979 113.874c1.168 7.041 10.702 9.046 14.613 3.075l53.836-82.171 101.811 47.512c8.157 3.81 17.864-2.012 18.39-10.966l14.343-243.849c.016-.225.015-.457.009-.685zM243.371 303.191l-16.967-7.917 83.469-93.586-12.073 18.428-54.429 83.075zm-24.602 6.212l15.724 7.338-27.445 41.89 11.721-49.228zm85.214-125.2l-96.718 108.441a8.097 8.097 0 00-1.816 3.479l-15.431 64.807-12.404-74.428 126.369-102.299zm49.654 170.446l-95.586-44.607 107.897-164.684-12.311 209.291z"
        }
      ></path>
    </svg>
  );
}

export default TelegramsvgIcon;
/* prettier-ignore-end */