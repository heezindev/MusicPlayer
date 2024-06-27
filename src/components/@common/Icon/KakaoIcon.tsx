import * as React from "react";
import { SVGProps, memo } from "react";
export const KakaoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#kakaoTalk_svg__a)">
      <path
        opacity={0.902}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.526 0C4.712 0 0 3.707 0 8.277c0 2.842 1.822 5.349 4.599 6.839L3.43 19.457a.431.431 0 0 0 .659.467l5.12-3.44c.432.043.87.068 1.317.068 5.813 0 9.474-3.705 9.474-8.276C20 3.707 16.34 0 10.526 0Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="kakaoTalk_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(KakaoIcon);
export default Memo;
