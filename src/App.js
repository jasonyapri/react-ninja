import Navbar from './Navbar';
import Home from './Home';
import BlogDetail from './BlogDetail';
import Create from './Create';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Clock from './Clock';

function App() {
  const title = 'Welcome to the new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
