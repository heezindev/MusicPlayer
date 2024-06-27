import { useAuthStore } from "@/store/authStore";
import { PropsWithChildren, useEffect, useState } from "react";

const HydrartionZustand = ({
  children,
  initialState,
}: PropsWithChildren<{ initialState: any }>) => {
  const [isInit, setIsInit] = useState(!initialState);

  useEffect(() => {
    if (initialState) {
      useAuthStore.setState(initialState);
    }
    setIsInit(true);
  }, []);

  if (!isInit) {
    return null;
  }

  return children;
};

export default HydrartionZustand;
