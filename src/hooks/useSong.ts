import { getDetailSong } from "@/api/songs";
import { useQuery } from "@tanstack/react-query";

export const fetchSong = async (id: number) => {
  if (!id) {
    return null;
  }

  return await getDetailSong(id);
};

const useSong = (id: number) => {
  const { data, refetch } = useQuery({
    queryKey: ["song", id],
    queryFn: () => fetchSong(id),
  });

  return {
    song: data,
    refetch,
  };
};

export default useSong;
