import { IGetItem, ISongDetailModel, ISongModel } from "@/@types";
import axios from "axios";

export interface GetSongsDto {
  page?: number;
  search?: string;
  limit?: number;
}

const song = axios.create({
  baseURL: `${process.env.SERVER_URL}/v1/songs`,
  withCredentials: true,
});

export const getSongs = async ({ page, search }: GetSongsDto) => {
  const response = await song.get<IGetItem<ISongModel>>(`/`, {
    params: { page, search },
  });
  return response.data;
};

export const getDetailSong = async (id: number) => {
  const response = await song.get<ISongDetailModel>(`/${id}`);

  return response.data;
};
