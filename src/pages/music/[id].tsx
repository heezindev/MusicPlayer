import { GetServerSideProps } from "next";
import Header from "@/components/@common/Header";
import Layout from "@/components/@common/Layout";
import MusicTemplate from "@/components/Music";
import { fetchSong } from "@/hooks/useSong";
import { QueryClient, dehydrate } from "@tanstack/react-query";

const MusicDetailPage = () => {
  return (
    <Layout header={<Header />}>
      <MusicTemplate />
    </Layout>
  );
};

export default MusicDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  try {
    const queryClient = new QueryClient();
    const songId = Number(query.id);

    if (isNaN(songId)) {
      return {
        notFound: true,
      };
    }

    await queryClient.prefetchQuery({
      queryKey: ["song", songId],
      queryFn: () => fetchSong(songId),
    });

    const existSong = queryClient.getQueryData(["song", songId]);

    console.log("existSong", existSong);

    if (!existSong) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};
