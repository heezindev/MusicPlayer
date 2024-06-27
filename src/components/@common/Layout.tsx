import styled from "@emotion/styled";
import { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  header?: ReactNode;
  footer?: ReactNode;
};

const Layout: FC<PropsWithChildren<Props>> = ({ children, header, footer }) => {
  return (
    <LayoutStyle>
      {header}
      <div className="main">{children}</div>
      {footer}
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  height: 100%;

  & > .main {
    box-sizing: border-box;

    min-height: 100%;

    max-width: 590px;
    width: 100%;

    margin: 0 auto;
  }
`;
