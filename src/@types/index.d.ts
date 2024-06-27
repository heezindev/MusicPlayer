export interface IGetItem<T> {
  totalCount: number;
  isEnd: boolean;
  items: T[];
}

export interface ISongModel {
  id: number;
  title: string;
  lyrics: string;
  likeCount: number;
  album: {
    id: number;
    title: string;
    releaseDate: string;
    image: string;
    artist: {
      id: number;
      name: string;
      image: string;
    };
  };
}

export type ISongDetailModel = ISongModel & {
  mp3: string;
};

export interface IUser {
  id: number;
  nickname: string;
  loginProvider: {
    provider: string;
  };
  playlists: {
    id: number;
    title: string;
    isPublic: true;
    likeCount: number;
  }[];
}
