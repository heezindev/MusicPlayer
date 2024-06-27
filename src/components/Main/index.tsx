import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC } from "react";

const MainTemplate: FC = () => {
  const router = useRouter();
  console.log(router);
  return <MainTemplateStyle>gg</MainTemplateStyle>;
};

export default MainTemplate;

const MainTemplateStyle = styled.div``;
