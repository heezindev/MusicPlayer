import GlobalStyle from "@/components/@common/GlobalStyle";
import HydrartionZustand from "@/components/@common/HydrationZustand";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 호출할 것인지
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
      // SSR에서는 클라이언트에서 즉시 재요청하는 것을 피하기 위해,
      // default staleTime을 0보다 높게 설정하는 것이 일반적입니다.
      staleTime: 10000000 * 20,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <HydrartionZustand initialState={pageProps.initialState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </HydrartionZustand>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
