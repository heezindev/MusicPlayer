import { FC } from "react";

type Props = {
  active?: boolean;
};

export const NavSearchIcon: FC<Props> = ({ active }) => {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m505 442.7-99.7-99.7c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.7 44-128 0-114.9-93.1-208-208-208s-208 93.1-208 208 93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zm-297-106.7c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        fill={active ? "#B82C2C" : "#A3A3A3"}
      />
    </svg>

    // <svg
    //   width="21"
    //   height="20"
    //   viewBox="0 0 21 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#clip0_53_532)">
    //     <path
    //       d="M15.1774 12.93C16.3878 11.2784 16.9299 9.23062 16.6953 7.19644C16.4607 5.16226 15.4667 3.29168 13.9121 1.95892C12.3575 0.626155 10.3571 -0.070492 8.31095 0.00834944C6.26481 0.0871909 4.32388 0.935706 2.87649 2.38414C1.42909 3.83257 0.581965 5.7741 0.504587 7.8203C0.42721 9.86649 1.12529 11.8665 2.45916 13.4201C3.79303 14.9737 5.66433 15.9663 7.69868 16.1995C9.73302 16.4326 11.7804 15.8891 13.4312 14.6775H13.4299C13.4674 14.7275 13.5074 14.775 13.5524 14.8213L18.3649 19.6338C18.5993 19.8683 18.9172 20.0001 19.2488 20.0003C19.5804 20.0004 19.8985 19.8688 20.133 19.6344C20.3676 19.4 20.4994 19.082 20.4995 18.7504C20.4996 18.4189 20.368 18.1008 20.1337 17.8663L15.3212 13.0538C15.2765 13.0085 15.2284 12.9667 15.1774 12.9288V12.93ZM15.4999 8.125C15.4999 9.02784 15.3221 9.92184 14.9766 10.756C14.6311 11.5901 14.1247 12.348 13.4863 12.9864C12.8479 13.6248 12.09 14.1312 11.2558 14.4767C10.4217 14.8222 9.52774 15 8.6249 15C7.72206 15 6.82807 14.8222 5.99395 14.4767C5.15984 14.1312 4.40195 13.6248 3.76354 12.9864C3.12514 12.348 2.61873 11.5901 2.27323 10.756C1.92773 9.92184 1.7499 9.02784 1.7499 8.125C1.7499 6.30164 2.47423 4.55296 3.76354 3.26364C5.05286 1.97433 6.80154 1.25 8.6249 1.25C10.4483 1.25 12.1969 1.97433 13.4863 3.26364C14.7756 4.55296 15.4999 6.30164 15.4999 8.125Z"
    //       fill={active ? "#B82C2C" : "#A3A3A3"}
    //       fillOpacity="0.46"
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_53_532">
    //       <rect
    //         width="20"
    //         height="20"
    //         fill="white"
    //         transform="translate(0.5)"
    //       />
    //     </clipPath>
    //   </defs>
    // </svg>
  );
};
