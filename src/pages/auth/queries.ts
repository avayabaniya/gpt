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

interface RegisterPayload {
  email: string;
  password: string;
}

interface RegisterResponse {
  access_token: string
}

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => {
      return axios.post<RegisterResponse>(
        "/auth/registration",
        { ...payload, username: payload.email}
      );
    },
  });
};