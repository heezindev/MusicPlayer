import { NextPage } from "next";

import Layout from "@/components/@common/Layout";
import Navigation from "@/components/@common/Navigation";
import SearchTemplate from "@/components/Search";
import Header from "@/components/@common/Header";

const SearchPage: NextPage = () => {
  return (
    <Layout
      header={<Header title="Search" login />}
      footer={<Navigation tab="search" />}
    >
      <SearchTemplate />
    </Layout>
  );
};

export default SearchPage;
