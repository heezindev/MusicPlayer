import { IUser } from "@/@types";
import { loadLoginUser } from "@/api/auth";
import { getCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { create } from "zustand";

interface AuthState {
  token: string | null; // 토큰 상태
  user: IUser | null; // 사용자 정보 상태
  isLoggedIn: boolean; // 로그인 상태
  fetchUser: () => Promise<void>; // 사용자 정보를 비동기적으로 가져오는 함수
}

// Zustand 스토어 생성
export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isLoggedIn: false,
  fetchUser: async () => {},
}));

// 서버 사이드에서 상태를 초기화하는 함수
export const initializeAuthState = async (
  context: GetServerSidePropsContext
): Promise<Partial<AuthState>> => {
  const token = getCookie("token", { req: context.req });
  let user = null;
  let isLoggedIn = false;

  if (token) {
    user = await loadLoginUser(token);
    isLoggedIn = !!user;
  }

  return {
    token: token?.toString() || null,
    user,
    isLoggedIn,
  };
};
