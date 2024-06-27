import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";

import Portal from "@/components/@common/Portal";
import { CloseIcon } from "./Icon/CloseIcon";
import { ISongDetailModel } from "@/@types";

interface Props {
  onClose: () => void;
  song: ISongDetailModel | null | undefined;
}

const LyricsModal: FC<Props> = ({ song, onClose }) => {
  if (!song) return null;

  return (
    <Portal selector="#modal">
      <LyricsModalStyle>
        <div className="backdrop" />
        <div className="close" onClick={onClose}>
          <CloseIcon />
        </div>
        <div className="container">
          <p>{song.lyrics}</p>
        </div>
      </LyricsModalStyle>
      <Global
        styles={css`
          body {
            touch-action: none;
            -webkit-overflow-scrolling: none;
            overflow: hidden;
            overscroll-behavior: none;
          }
        `}
      />
    </Portal>
  );
};

export default LyricsModal;

const LyricsModalStyle = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 10000;

  & > .backdrop {
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.75);
  }

  & > .close {
    position: absolute;

    top: 140px;
    right: 200px;

    z-index: 1;

    color: #fff;
    font-size: 32px;

    cursor: pointer;

    & > svg {
      & > path {
        fill: #fff;
      }
    }
  }

  & > .container {
    position: absolute;

    top: 200px;
    left: 200px;
    right: 200px;
    bottom: 200px;

    z-index: 1;

    color: #fff;

    & > p {
      font-size: 20px;
      white-space: pre-line;
    }
  }
`;
