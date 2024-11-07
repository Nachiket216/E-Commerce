import { Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
};
