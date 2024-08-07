import { FC } from "react";

type Props = {
  active?: boolean;
};

export const ListIcon: FC<Props> = ({ active }) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={active ? "#B82C2C" : "#A3A3A3"}
        d="m15 6h-12v2h12zm0 4h-12v2h12zm-12 6h8v-2h-8zm14-10v8.18c-.31-.11-.65-.18-1-.18a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3v-9h3v-2z"
      />
    </svg>
  );
};
