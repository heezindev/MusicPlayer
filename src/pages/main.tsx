import { GetServerSidePropsContext, NextPage } from "next";

import MainTemplate from "@/components/Main";
import Layout from "@/components/@common/Layout";
import Navigation from "@/components/@common/Navigation";
import Header from "@/components/@common/Header";
import { initializeAuthState } from "@/store/authStore";

const MainPage: NextPage = () => {
  return (
    <Layout
      header={<Header title="Listen Now" login />}
      footer={<Navigation tab="listen" />}
    >
      <MainTemplate />
    </Layout>
  );
};

export default MainPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const initialState = await initializeAuthState(context);

  // 페이지 컴포넌트에 전달할 props
  return {
    props: {
      initialState,
    },
  };
};
