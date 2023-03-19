import React from "react";
import Svg from "../Svg";
import { SvgProps } from "types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="10" fill="#352F44" />
      <path
        d="M6.63 13.38c.636.637 1.654.637 2.418-.127l1.082-1.082 1.082 1.082c.764.764 1.782.764 2.418.127.637-.636.637-1.655-.127-2.418L12.42 9.88l1.082-1.082c.764-.764.764-1.782.127-2.418-.636-.637-1.654-.637-2.418.127L10.13 7.59 9.048 6.507c-.764-.764-1.782-.764-2.418-.127-.637.636-.637 1.654.127 2.418L7.84 9.88l-1.082 1.082c-.764.764-.764 1.782-.127 2.418Z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Icon;
