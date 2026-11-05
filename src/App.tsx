import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SunEffect from './components/SunEffect';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import WebDesignPage from './pages/WebDesignPage';
import UxUiPage from './pages/UxUiPage';
import VibeCodingPage from './pages/VibeCodingPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import AboutPage from './pages/AboutPage';
import Demo from './demo';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <main className="min-h-screen relative font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
          <div className="grain"></div>
          <SunEffect />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ux-ui" element={<UxUiPage />} />
            <Route path="/web-design" element={<WebDesignPage />} />
            <Route path="/vibe-coding" element={<VibeCodingPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/online-marketing" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* Redirect /contact to /about#contact */}
            <Route path="/contact" element={<Navigate to="/about#contact" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LanguageProvider>
  );
}
