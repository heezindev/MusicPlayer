export const LeftArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#leftArrow_svg__a)">
      <path
        d="m9 4-8 8 8 8"
        stroke="#B3B8C1"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="leftArrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
