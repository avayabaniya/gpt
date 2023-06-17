import { ReactNode, useMemo } from "react";

import authenticatedInstance from "./apiPrivateInstance";

const WithAxios = ({ children }: { children?: ReactNode }) => {
  useMemo(() => {
    authenticatedInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response) {
          if (error.response.status === 403) {
            localStorage.clear();
            return Promise.reject(error);
          } else {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return <>{children}</>;
};

export default WithAxios;
