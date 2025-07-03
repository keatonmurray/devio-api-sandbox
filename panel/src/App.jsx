import { Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Panel />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
