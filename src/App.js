import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { Movies } from './components/Movies/Movies';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
