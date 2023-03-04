import { ComponentType, LazyExoticComponent, Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
const Loadable =
  (Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>) =>
  (props: JSX.IntrinsicAttributes) => {
    return (
      <>
        <Suspense fallback={<>Loading</>}>
          <Component {...props} />
        </Suspense>
      </>
    );
  };

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}

const Home = Loadable(lazy(() => import("../Pages/Home")));
const NotFound = Loadable(lazy(() => import("../Pages/NotFound")));
