import { GetServerSidePropsContext, NextPage } from "next";

import IntroTemplate from "@/components/Intro";
import { initializeAuthState, useAuthStore } from "@/store/authStore";

const IntroPage: NextPage<any> = ({ initialState }) => {
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return <IntroTemplate />;
};

export default IntroPage;

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
