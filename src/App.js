import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Form';
import { Movies } from './components/Movies';
import { Home } from './components/Home';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
