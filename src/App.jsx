import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MachinePage from './pages/MachinePage';

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-5xl font-bold text-slate-300 mb-4">404</p>
        <p className="text-xl text-slate-600 mb-6">Page not found</p>
        <a href="/" className="text-amber-600 hover:text-amber-700 font-medium">
          Return to machine list
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/machines/:machineId" element={<MachinePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
