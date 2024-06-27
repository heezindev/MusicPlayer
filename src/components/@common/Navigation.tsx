import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import { ListenIcon } from "./Icon/ListenIcon";
import { NavSearchIcon } from "./Icon/NavSearchIcon";
import { ListIcon } from "./Icon/ListIcon";

type NavigationEnum = "listen" | "playlist" | "search";

type Props = {
  tab: NavigationEnum;
};

const Navigation: FC<Props> = ({ tab }) => {
  return (
    <NavigationStyle>
      <div className="container">
        <Link href="/main" legacyBehavior>
          <div className={cx("item", { active: tab === "listen" })}>
            {tab === "listen" ? <ListenIcon active /> : <ListenIcon />}
            <h5>Listen Now</h5>
          </div>
        </Link>
        <Link href="/playlist" legacyBehavior>
          <div className={cx("item", { active: tab === "playlist" })}>
            {tab === "playlist" ? <ListIcon active /> : <ListIcon />}
            <h5>Playlist</h5>
          </div>
        </Link>
        <Link href="/search" legacyBehavior>
          <div className={cx("item", { active: tab === "search" })}>
            {tab === "search" ? <NavSearchIcon active /> : <NavSearchIcon />}
            <h5>Search</h5>
          </div>
        </Link>
      </div>
    </NavigationStyle>
  );
};

export default Navigation;

const NavigationStyle = styled.nav`
  position: fixed;
  max-width: 590px;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  background: #000;

  & > .container {
    box-sizing: border-box;

    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    margin: 0 auto;

    & > .item {
      flex: 1;

      padding-top: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;

      cursor: pointer;

      border-top: solid 2px #000;
      & > svg {
        width: 24px;
        height: 24px;
      }
      & > h5 {
        margin-top: 6px;

        font-family: "ClashDisplay-Medium";

        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.04em;

        color: #aaaaaa;
      }

      &.active > h5 {
        color: #d80c18;
        font-family: "ClashDisplay-Semibold";
      }
      &.active {
        border-top: solid 2px #d80c18;
      }
    }
  }
`;
