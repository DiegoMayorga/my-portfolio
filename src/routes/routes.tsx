import { Route, Routes, Navigate } from "react-router-dom";
import Calculator from "../components/pages/Calculator";
import Game from "../components/pages/Game";
import Home from "../components/pages/AboutMe";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
  redirectTo?: string;
}

const routeConfig: RouteConfig[] = [
  { path: "/", element: <Home />, exact: true },
  { path: "/aboutme", element: <Home /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/game", element: <Game /> },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routeConfig.map((route, index) =>
        route.redirectTo ? (
          <Route
            key={index}
            path={route.path}
            element={<Navigate to={route.redirectTo} replace />}
          />
        ) : (
          <Route key={index} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  );
};

export default AppRoutes;
