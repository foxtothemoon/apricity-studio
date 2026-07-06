import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SunEffect from './components/SunEffect';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <main className="min-h-screen relative font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
          <div className="grain"></div>
          <SunEffect />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LanguageProvider>
  );
}
