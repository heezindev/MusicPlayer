import { NextPage } from "next";

import Layout from "@/components/@common/Layout";
import Navigation from "@/components/@common/Navigation";
import Header from "@/components/@common/Header";
import PlaylistTemplate from "@/components/Playlist";

const PlayListPage: NextPage = () => {
  return (
    <Layout
      header={<Header title="Playlist" login />}
      footer={<Navigation tab="playlist" />}
    >
      <PlaylistTemplate />
    </Layout>
  );
};

export default PlayListPage;
