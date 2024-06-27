import { useRef, useEffect, useState, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Portal: FC<PropsWithChildren<{ selector: string }>> = ({
  children,
  selector,
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as Element) : null;
};

export default Portal;
