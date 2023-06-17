import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { Button } from "../components";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { FiMoreHorizontal } from "react-icons/fi";
import { useChatList } from "./queries";
import clsx from "clsx";
import { useEffect } from "react";

function RequireAuth({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("access_token");
  if ( ! Boolean(token)) {
    return <Navigate to="/auth/login"  replace />;
  }

  return children;
}

export const Sidebar = () => {
  const { data, isSuccess } = useChatList();

  const navigate = useNavigate();
  useEffect(() => {
    function checkAuth() {
    
      const token = localStorage.getItem("access_token");

      console.log("Access token " + token);
      if (! Boolean(token)) {
        navigate("/auth/login", { replace: true });
      }
    }

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (

    <RequireAuth>
    <div className="flex overflow-hidden w-full h-full">
      <div className={`${styles.sidebar} h-screen w-[260px] p-2`}>
        <div className="flex gap-2">
          <Link to={"/"} className="w-full">
            <Button variant="outline" className="gap-3 justify-start w-full">
              <AiOutlinePlus />
              New chat
            </Button>
          </Link>
          {/* <Button variant="outline" className="">
                        <FiSidebar />
                    </Button> */}
        </div>

        <div className={styles.scrollableContainer}>
          {isSuccess &&
            data.data.map(({ chatId, createdAt, title }) => (
              <NavLink
                to={`/${chatId}`}
                key={chatId}
                className={({ isActive }) =>
                  clsx(
                    "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-4",
                    isActive && "bg-gray-800"
                  )
                }
              >
                <div>
                  <BsChatLeft size={16} />
                </div>
                <div className="text-ellipsis whitespace-nowrap">{title}</div>
              </NavLink>
            ))}
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-3">
              <RxPerson />
              <div className="text-sm">baniyaavaya@gmail.com</div>
            </div>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>

      <div className="oveflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
    </RequireAuth>
  );
};
