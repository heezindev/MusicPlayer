import styled from "@emotion/styled";

import Button from "../@common/Button";
import { ActivePlayIcon } from "../@common/Icon/ActivePlayIcon";
import { ActiveShuffleIcon } from "../@common/Icon/ActiveShuffleIcon";
import SimpleMusic from "../@common/SimpleMusic";
import Link from "next/link";

const PlaylistTemplate = () => {
  return (
    <PlaylistTemplateStyle>
      <div className="buttonWrapper">
        <Button className="button">
          <ActivePlayIcon />
          Play
        </Button>
        <Button className="button">
          <ActiveShuffleIcon />
          Shuffle
        </Button>
      </div>
      <div className="container">
        {[...Array(10)].map((_, index) => (
          <Link href={`/music/${index}`} key={index}>
            <div className="simpleMusicWrapper">
              <SimpleMusic />
            </div>
          </Link>
        ))}
      </div>
    </PlaylistTemplateStyle>
  );
};

export default PlaylistTemplate;

const PlaylistTemplateStyle = styled.div`
  padding-top: 60px;

  & > .buttonWrapper {
    margin-top: 30px;
    display: flex;

    & > .button {
      &:first-of-type {
        margin-right: 50px;
      }
      & > .container {
        display: flex;
        align-items: center;

        & > svg {
          margin-right: 10px;
        }
      }
    }
  }

  & > .container {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    & > .simpleMusicWrapper {
      cursor: pointer;
      margin-bottom: 10px;
    }
    & > .simpleMusicWrapper:last-of-type {
      margin-bottom: 0;
    }
  }
`;
