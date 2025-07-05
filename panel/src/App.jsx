import { Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';
import Pages from './pages/content/Pages';
import Blogs from './pages/content/posts/Blogs';
import Plugins from './pages/plugins/Plugins';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Panel />}>
        <Route path="pages" element={<Pages />} />
        <Route path="blogs" element={<Blogs />} />
        {/* Temporary static route for UI rendering purposes - I will eventually make it a wildcard */}
        <Route path="plugin/paypal" element={<Plugins/>} />
      </Route>
    </Routes>
  );
}

export default App;
