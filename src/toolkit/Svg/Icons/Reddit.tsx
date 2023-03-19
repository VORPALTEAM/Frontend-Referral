import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z" />
      <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z" />
      <path d="M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z" />
    </Svg>
  );
};

export default Icon;
