import { IGetItem, ISongDetailModel, ISongModel, IUser } from "@/@types";
import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.SERVER_URL}/v1/auth`,
  withCredentials: true,
});

/** 로그인한 유저 정보 조회 */
export const loadLoginUser = async (token: string) => {
  const response = await auth.get<IUser>("/", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};
