import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollManager } from "./ScrollManager";

export function Layout() {
  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          // A plain #main link would be read as a route by the hash router.
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
