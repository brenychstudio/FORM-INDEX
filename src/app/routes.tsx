import { Routes, Route } from "react-router-dom";

import CampaignPage from "../pages/campaign";
import Home from "../pages/home";
import LookbookPage from "../pages/lookbook";
import ProductPage from "../pages/product";
import TexturesPage from "../pages/textures";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lookbook" element={<LookbookPage />} />
      <Route path="/campaign" element={<CampaignPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/textures" element={<TexturesPage />} />
    </Routes>
  );
}
