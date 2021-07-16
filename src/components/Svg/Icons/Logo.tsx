import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface MobileLogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<MobileLogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 80 40" {...props}>
      <image width="80" height="40" href={isDark ? '/images/egg/logo.png' : '/images/egg/logo.png'}/>
    </Svg>
  );
};

export default Icon;
