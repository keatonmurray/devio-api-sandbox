import { Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';
import Pages from './pages/content/Pages';
import Blogs from './pages/content/posts/Blogs';
import Paypal from './pages/plugins/paypal/Paypal';
import Login from './pages/auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Panel />}>
        <Route path="pages" element={<Pages />} />
        <Route path="blogs" element={<Blogs />} />
        {/* Temporary static route for UI rendering purposes - I will eventually make it a wildcard */}
        <Route path="plugin/paypal" element={<Paypal/>} />
      </Route>
    </Routes>
  );
}

export default App;
