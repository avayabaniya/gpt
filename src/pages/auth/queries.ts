import { useMutation } from "@tanstack/react-query";
import axios from "../../api/apiPublicInstance";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    issued: string
    expires: string
  }

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => {
      return axios.post<LoginResponse>(
        "/auth/token",
        { ...payload, username: payload.email, "grant_type": "password"}
      );
    },
  });
};