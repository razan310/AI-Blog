import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NewsPage from "./Pages/NewsPage";
import BlogOpenPage from "./Pages/BlogOpenPage";
import PodcastsPage from "./Pages/PodcastsPage";
import ResourcesPage from "./Pages/ResourcesPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/AI-Blog" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogOpenPage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* صفحة الخطأ 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
