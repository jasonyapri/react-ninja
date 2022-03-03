import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { Routes, Route } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
