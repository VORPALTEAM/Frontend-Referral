import React from "react";
import Svg from "../Svg";
import { SvgProps } from "types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 14C9.53975 14 9.16667 13.619 9.16667 13.1489V11.3027C9.16667 10.4034 9.75517 9.61655 10.5978 9.38936C11.6448 9.10711 12.3583 8.1357 12.3327 7.02715C12.3186 6.41715 12.0751 5.84042 11.6469 5.40315C11.2188 4.96587 10.654 4.71719 10.0567 4.70281C9.42275 4.68791 8.82296 4.92813 8.36979 5.38021C7.91638 5.83251 7.66667 6.43796 7.66667 7.08511C7.66667 7.55515 7.29358 7.93617 6.83333 7.93617C6.37308 7.93617 6 7.55515 6 7.08511C6 5.97574 6.428 4.93783 7.20521 4.16255C7.98221 3.38749 9.00892 2.97528 10.096 3.00115C11.1236 3.02587 12.0929 3.45145 12.8255 4.19953C13.558 4.94766 13.9747 5.93762 13.9989 6.98711C14.0426 8.88638 12.819 10.551 11.0232 11.0351C10.9132 11.0648 10.8333 11.1773 10.8333 11.3027V13.1489C10.8333 13.619 10.4602 14 10 14Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11 16C11 16.5523 10.5523 17 10 17C9.4477 17 9 16.5523 9 16C9 15.4477 9.4477 15 10 15C10.5523 15 11 15.4477 11 16Z" />
        <circle cx="10" cy="10" r="9.5" />
    </Svg>
  );
};

export default Icon;
