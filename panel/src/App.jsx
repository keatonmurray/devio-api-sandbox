import { Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';
import Pages from './pages/content/Pages';
import Blogs from './pages/content/posts/Blogs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Panel />}>
        <Route path="pages" element={<Pages />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}

export default App;
