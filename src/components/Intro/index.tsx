import styled from "@emotion/styled";
import { FC, useCallback } from "react";
import { KakaoIcon } from "../@common/Icon/KakaoIcon";

const IntroTemplate: FC = () => {
  const handleKakaoLogin = useCallback(() => {
    // 카카오 로그인 페이지로 리다이렉트
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/auth/login/kakao?redirect=/main`;
  }, []);

  return (
    <IntroStyle>
      <div className="wrapper">
        <div className="container">
          <div className="logo">MusicPlayer</div>
          <div className="login" onClick={handleKakaoLogin}>
            <KakaoIcon className="icon" />
            <span>카카오 로그인</span>
          </div>
        </div>
      </div>
    </IntroStyle>
  );
};

export default IntroTemplate;

const IntroStyle = styled.div`
  height: 100%;

  & > .wrapper {
    box-sizing: border-box;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 590px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    & > .container {
      padding: 0 24px;

      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > .logo {
        cursor: pointer;

        width: 100%;
        height: 500px;

        border-radius: 16px;
        /* background: linear-gradient(
          180deg,
          #e80a0a 0%,
          rgba(70, 49, 49, 0.33) 66.88%,
          rgba(198, 40, 40, 0.12) 88.02%,
          rgba(90, 22, 22, 0) 100%,
          rgba(123, 39, 39, 0.06) 100%,
          rgba(154, 33, 33, 0.07) 100%
        ); */

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        color: rgba(255, 255, 255, 0.85);

        display: flex;
        justify-content: center;
        align-items: center;

        text-shadow: 12px 12px 12px rgba(0, 0, 0, 0.7);
        font-size: 64px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -0.32px;
      }

      & > .login {
        position: relative;
        cursor: pointer;
        margin-top: 40px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #fee500;

        padding: 0px 16px;
        height: 52px;

        border-radius: 8px;

        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;

        & > .icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;
