import { Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Panel />} />
      </Routes>
  );
}

export default App;
