import * as React from "react";
import { SVGProps, memo } from "react";
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.849 18.293 5.706 4.151 4.151 5.706l14.143 14.142 1.555-1.555Z"
      fill="#1B1C1E"
    />
    <path
      d="M18.294 4.151 4.15 18.293l1.555 1.555L19.85 5.706l-1.555-1.555Z"
      fill="#1B1C1E"
    />
  </svg>
);
const Memo = memo(CloseIcon);
export default Memo;
