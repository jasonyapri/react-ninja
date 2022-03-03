import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
