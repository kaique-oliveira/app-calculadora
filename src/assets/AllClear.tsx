import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const AllClear = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M2.892 18.25H.097L6.377.795H9.42l6.282 17.455h-2.796L7.972 3.966h-.137L2.892 18.25Zm.469-6.835h9.068v2.216H3.361v-2.216Zm28.538-4.943H29.24a4.066 4.066 0 0 0-.571-1.5 4.197 4.197 0 0 0-1.023-1.1 4.406 4.406 0 0 0-1.355-.682 5.29 5.29 0 0 0-1.576-.23c-1.006 0-1.907.253-2.702.759-.79.505-1.415 1.247-1.875 2.224-.455.977-.682 2.17-.682 3.58 0 1.42.227 2.619.682 3.596.46.978 1.088 1.716 1.883 2.216.796.5 1.69.75 2.685.75.551 0 1.074-.074 1.568-.221.5-.154.952-.378 1.355-.674a4.082 4.082 0 0 0 1.61-2.565l2.66.008a7.12 7.12 0 0 1-.827 2.37 6.538 6.538 0 0 1-1.56 1.858 7.055 7.055 0 0 1-2.164 1.201c-.813.285-1.699.427-2.66.427-1.51 0-2.857-.358-4.039-1.074-1.182-.722-2.114-1.753-2.795-3.094-.676-1.34-1.014-2.94-1.014-4.798 0-1.864.34-3.463 1.022-4.799.682-1.34 1.614-2.369 2.796-3.085C21.839.918 23.183.557 24.688.557c.927 0 1.79.133 2.592.4a6.838 6.838 0 0 1 2.173 1.16 6.376 6.376 0 0 1 1.594 1.857c.42.728.704 1.56.852 2.498Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2.901}
        x2={24.963}
        y1={-1.073}
        y2={25.218}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={"#EE1391"} />
        <Stop offset={1} stopColor="#FD5633" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default AllClear;