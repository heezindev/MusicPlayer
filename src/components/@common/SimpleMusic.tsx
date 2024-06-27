import styled from "@emotion/styled";

const SimpleMusic = () => {
  return (
    <SimpleMusicStyle>
      <div className="thumbnail">
        <img src="https://via.placeholder.com/48x48" alt="" />
      </div>
      <div className="info">
        <div className="name">Name</div>
        <div className="artist">Artist Name</div>
      </div>
    </SimpleMusicStyle>
  );
};

export default SimpleMusic;

const SimpleMusicStyle = styled.div`
  display: flex;

  &:last-of-type {
    margin-bottom: 0;
  }

  & > .thumbnail {
    margin-bottom: 14px;
  }

  & > .info {
    flex: 1;
    margin-left: 18px;
    padding-bottom: 15px;

    border-bottom: 1px solid #3d3d3d;

    display: flex;
    flex-direction: column;

    & > .name {
      color: #fff;

      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.32px;
    }

    & > .artist {
      color: rgba(255, 255, 255, 0.6);

      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.32px;
    }
  }
`;
