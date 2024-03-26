import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Moon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M20.103 11.629a1.126 1.126 0 0 0-1.125-.282 7.88 7.88 0 0 1-9.822-9.826A1.125 1.125 0 0 0 7.749.115a10.206 10.206 0 0 0-5.147 3.608 10.125 10.125 0 0 0 8.091 16.212A10.039 10.039 0 0 0 16.78 17.9a10.206 10.206 0 0 0 3.604-5.15 1.125 1.125 0 0 0-.281-1.122Zm-4.676 4.475A7.875 7.875 0 1 1 6.594 3.087a10.136 10.136 0 0 0 10.822 10.822 7.949 7.949 0 0 1-1.99 2.195Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2.555}
        x2={17.902}
        y1={2.585}
        y2={18.18}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EE1391" />
        <Stop offset={1} stopColor="#FD5633" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Moon;
