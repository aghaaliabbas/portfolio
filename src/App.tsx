import { LazyMotion, domAnimation } from "framer-motion";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout";
import ExperiencePage from "@/pages/ExperiencePage";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";

// HashRouter: GitHub Pages can't rewrite deep links, so routes live after the # (e.g. /portfolio/#/experience).
export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </LazyMotion>
  );
}
