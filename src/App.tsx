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
          <Route path="/AI-Blog/news" element={<NewsPage />} />
          <Route path="/AI-Blog/blog" element={<BlogOpenPage />} />
          <Route path="/AI-Blog/podcasts" element={<PodcastsPage />} />
          <Route path="/AI-Blog/resources" element={<ResourcesPage />} />
          <Route path="/AI-Blog/Contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* صفحة الخطأ 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
