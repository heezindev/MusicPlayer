import styled from "@emotion/styled";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SoundDownIcon } from "../@common/Icon/SoundDownIcon";
import { SoundIcon } from "../@common/Icon/SoundIcon";
import { useRouter } from "next/router";
import useSong from "@/hooks/useSong";
import { RewindIcon } from "../@common/Icon/RewindIcon";
import { PlayIcon } from "../@common/Icon/PlayIcon";
import { PauseIcon } from "../@common/Icon/PauseIcon";
import { FastForwardIcon } from "../@common/Icon/FastForwardIcon";
import LyricsModal from "../@common/LyricsModal";
import { PlayListIcon } from "../@common/Icon/PlayListIcon";
import { LyricsIcon } from "../@common/Icon/LyricsIcon";
import { HeartIcon } from "../@common/Icon/HeartIcon";
import Button from "../@common/Button";
import { MutecIcon } from "../@common/Icon/MuteIcon";

const MusicTemplate: FC = () => {
  const router = useRouter();

  const { song } = useSong(+router.query.id!);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeBarContainerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [openLyricsModal, setOpenLyricsModal] = useState(false);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio?.duration || 0);
    };

    const updateCurrentTime = () => {
      setCurrentTime(audio?.currentTime || 0);
    };

    audio?.addEventListener("loadedmetadata", setAudioData);
    audio?.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      audio?.removeEventListener("loadedmetadata", setAudioData);
      audio?.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel / 100;
    }
  }, [volumeLevel]);

  const progressStyle = {
    width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
    backgroundColor: "white",
    height: "100%",
    transition: " 0.3s all ease-in-out",
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLElement>) => {
    const progressBar = e.target as HTMLElement;
    const clickPositionX = e.clientX;
    const progressBarStartX = progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const clickPositionInBar = clickPositionX - progressBarStartX;
    const clickRatio = clickPositionInBar / progressBarWidth;
    const newTime = duration * clickRatio;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleOpenLyrics = useCallback(() => {
    setOpenLyricsModal(true);
  }, []);

  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const rewinrdMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, []);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  }, []);

  /** 음소거  */
  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const muted = !audioRef.current.muted;
      audioRef.current.muted = muted;
      setIsMuted(muted);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!volumeBarContainerRef.current) return;
    const bounds = volumeBarContainerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const volume = Math.max(0, Math.min(1, x / bounds.width));
    setVolumeLevel(volume * 100);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleMouseMove, handleMouseUp]
  );

  return (
    <MusicTemplateStyle>
      <div className="wrapper">
        <div className="thumbnail">
          <img src={song?.album.image} alt="" />
        </div>
        <div className="info">
          <div className="name">
            {song?.album.artist.name} - {song?.title}
          </div>
          <div className="right">
            <div className="heart">
              <HeartIcon />
            </div>
            <div className="lyrics" onClick={handleOpenLyrics}>
              <LyricsIcon />
            </div>
          </div>
        </div>
        <div className="playTime">
          <div className="play">
            <div className="playBar" onClick={handleProgressBarClick}>
              <div style={progressStyle}></div>
            </div>
          </div>
          <div className="timeBox">
            <div className="time">{formatTime(currentTime)}</div>
            <div className="time">{formatTime(duration)}</div>
          </div>
        </div>
        <div className="playActive">
          <audio
            ref={audioRef}
            src={song?.mp3}
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="rewind" onClick={rewinrdMusic}>
            <RewindIcon />
          </div>
          <div
            className={isPlaying ? "pause" : "play"}
            onClick={isPlaying ? pauseMusic : playMusic}
          >
            {isPlaying ? <PlayIcon /> : <PauseIcon />}
          </div>
          <div className="fastForward">
            <FastForwardIcon />
          </div>
        </div>
        <div className="volumeActive">
          <div className="left">
            <div className="sound" onClick={toggleMute}>
              {isMuted ? <MutecIcon /> : <SoundIcon />}
            </div>
            <div
              className="volumeBarContainer"
              ref={volumeBarContainerRef}
              onMouseDown={handleMouseDown}
            >
              <div
                className="volumeBar"
                style={{
                  width: isMuted ? "0%" : `${volumeLevel}%`,
                }}
              />
            </div>
          </div>
          <div className="listAdd">
            <Button>리스트 추가</Button>
          </div>
        </div>
      </div>
      {openLyricsModal && (
        <LyricsModal onClose={() => setOpenLyricsModal(false)} song={song} />
      )}
    </MusicTemplateStyle>
  );
};

export default MusicTemplate;

const MusicTemplateStyle = styled.div`
  height: 100%;

  & > .wrapper {
    display: flex;
    flex-direction: column;

    & > .thumbnail {
      margin: 0 auto;
      margin-top: 60px;

      & > img {
        width: 300px;
        height: 300px;
      }
    }

    & > .info {
      margin-top: 100px;

      display: flex;
      justify-content: space-between;
      & > .name {
        color: #fff;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: 0.2px;
      }

      & > .right {
        display: flex;
        align-items: center;

        & > .heart {
          cursor: pointer;
          width: 30px;
          height: 30px;
        }

        & > .lyrics {
          margin-left: 20px;

          cursor: pointer;
          width: 30px;
          height: 30px;
        }
      }
    }

    & > .playTime {
      display: flex;
      flex-direction: column;

      & > .play {
        margin-top: 60px;

        & > .playBar {
          cursor: pointer;

          background-color: grey;
          width: 100%;
          height: 10px;
          position: relative;
        }
      }

      & > .timeBox {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        & > .time {
          color: rgba(255, 255, 255, 0.6);

          font-size: 12px;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: 0.2px;
        }
      }
    }

    & > .playActive {
      margin-top: 60px;

      width: 100%;
      display: flex;
      justify-content: space-between;

      & svg {
        cursor: pointer;
        width: 50px;
        height: 50px;
      }
    }

    & > .volumeActive {
      margin-top: 60px;

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > .left {
        flex: 1;

        display: flex;
        align-items: center;

        & > .volumeBarContainer {
          position: relative;

          cursor: pointer;
          width: 50%;
          height: 10px;
          background-color: grey;
          border-radius: 5px;
          margin: 0 10px;

          & > .volumeBar {
            height: 100%;
            background-color: white;
            border-radius: 5px;
          }
        }
        & svg {
          cursor: pointer;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
