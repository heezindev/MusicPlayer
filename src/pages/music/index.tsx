import { NextPage } from "next";

import Layout from "@/components/@common/Layout";

import MusicTemplate from "@/components/Music";

const MusicPage: NextPage = () => {
  return (
    <Layout>
      <MusicTemplate />
    </Layout>
  );
};

export default MusicPage;
