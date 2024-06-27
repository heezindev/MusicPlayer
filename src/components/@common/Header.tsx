import styled from "@emotion/styled";
import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { cx } from "@emotion/css";

import { LeftArrowIcon } from "./Icon/LeftArrowIcon";
import { HEADER_HEIGHT, MAX_WIDTH } from "@/utils/constant";
import { PersonIcon } from "./Icon/PersonIcon";

type Props = {
  className?: string;
  title?: string;
  login?: boolean;
};

const Header: FC<Props> = ({ title, className, login }) => {
  const router = useRouter();

  /** 뒤로가기 */
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <HeaderStyle className={cx(className)}>
      <div className="container">
        <LeftArrowIcon className="icon" onClick={handleBack} />
        {title && <h2>{title}</h2>}
        {login && <PersonIcon />}
      </div>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  & > .container {
    position: relative;
    box-sizing: border-box;

    max-width: ${MAX_WIDTH}px;
    width: 100%;
    height: ${HEADER_HEIGHT}px;

    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);

      cursor: pointer;
    }

    & > h2 {
      padding-left: 34px;

      font-weight: 600;
      font-size: 18px;
      line-height: 21px;

      color: #dfdfe9;
    }
  }
`;
