import Header from "../components/header/Header";
import AppRoutes from "./routes";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <ScrollToTop />
      <Header />
      <AppRoutes />
    </div>
  );
}
