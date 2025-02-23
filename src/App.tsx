import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Resources } from './pages/Resources';
import { Premium } from './pages/Premium';
import { useThemeStore } from './store/theme';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/docs" element={<Resources />} />
            <Route path="/premium" element={<Premium />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;