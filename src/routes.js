import { useRoutes, Navigate } from "react-router-dom";
import Protected from "helpers/Protected/Protected";
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";

const hasUsername = localStorage.getItem("username");

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <Protected isProtected={!hasUsername}>
          <Main />
        </Protected>
      ),
    },
    {
      path: "/login",
      element: hasUsername ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: "*",
      element: (
        <Protected isProtected={!hasUsername}>
          <NotFound />
        </Protected>
      ),
    },
  ]);
