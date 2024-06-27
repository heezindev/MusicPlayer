import { IGetItem, ISongModel } from "@/@types";
import { GetSongsDto, getSongs } from "@/api/songs";
import { QueryFunction, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const fetchSongs: QueryFunction<
  IGetItem<ISongModel>,
  any,
  never
> = async ({ queryKey }) => {
  const { page = 1, search } = queryKey[1];

  return await getSongs({ page, search });
};

const useSongs = (option?: GetSongsDto) => {
  const { isFetched, isLoading, data, refetch } = useQuery({
    queryKey: [
      "songs",
      {
        page: option?.page ?? 1,
        search: option?.search || null,
      },
    ],
    queryFn: fetchSongs,
  });

  return {
    songs: data ? data.items : [],
    isEnd: data && Boolean(data.isEnd),
    totalCount: data ? data.totalCount : 0,
    isFetched,
    isLoading,
    refetch,
  };
};

export default useSongs;
