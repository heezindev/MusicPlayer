import styled from "@emotion/styled";
import { SearchIcon } from "../@common/Icon/SearchIcon";
import { useRouter } from "next/router";
import useSongs from "@/hooks/useSongs";
import { useCallback, useState } from "react";
import Link from "next/link";

interface Query {
  page?: string;
  search?: string;
}

const SearchTemplate = () => {
  const router = useRouter();

  const { page, search: _search } = router.query as Query;

  const _page = page ? +page : 1;

  const { songs } = useSongs({
    page: _page,
    search: _search,
  });

  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    router.push({
      query: { ...router.query, search },
    });
  }, [router, search]);

  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <SearchTemplateStyle>
      <div className="search">
        <SearchIcon onClick={handleSearch} />
        <input
          type="text"
          onKeyDown={handleKeyDown}
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      <div className="songWrapper">
        <div className="songContainer">
          {songs.map((song) => (
            <Link href={`music/${song.id}`} key={song.id} legacyBehavior>
              <div className="songItemContainer">
                <div className="songItem">
                  <img src={song.album.image} />
                  <div className="singer">
                    {song.album.artist.name} - {song.title}
                  </div>
                  <div className="name">{song.album.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SearchTemplateStyle>
  );
};

export default SearchTemplate;

const SearchTemplateStyle = styled.div`
  padding-top: 60px;
  & > .search {
    display: flex;
    align-items: center;
    padding: 10px;

    border-radius: 12px;
    background: #3d3d3d;

    & > svg {
      cursor: pointer;
      height: 18px;
      & > path {
        fill: #a3a3a3;
      }
    }
    & > input {
      width: 100%;
      color: #fff;

      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: -0.32px;

      border: none;
      outline: none;
      background: #3d3d3d;
    }
  }

  & > .songWrapper {
    margin-top: 40px;
    padding-bottom: 140px;

    width: 100%;
    background-color: #000;

    & > .songContainer {
      display: flex;
      flex-wrap: wrap;

      margin: -25px -5px;

      & > .songItemContainer {
        width: 48%;
        padding: 25px 5px;

        & > .songItem {
          cursor: pointer;
          position: relative;

          width: 100%;
          padding-top: 100%;

          & > img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          & > .name {
            position: absolute;
            bottom: -45px;
            color: rgba(255, 255, 255, 0.6);

            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.32px;
          }

          & > .singer {
            color: #fff;

            position: absolute;

            bottom: -25px;
            font-size: 16px;
            font-weight: 300;
            line-height: 21px;
            letter-spacing: -0.32px;
          }
        }
      }

      & > .name {
        margin-top: 8px;

        color: #fff;

        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -0.32px;
      }

      & > .singer {
        color: rgba(255, 255, 255, 0.6);

        font-size: 16px;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: -0.32px;
      }
    }
  }
`;
