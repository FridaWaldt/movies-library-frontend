import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormView } from './views/FormView';
import { MoviesView } from './views/MoviesView';
import { HomeView } from './views/HomeView';
import {Nav} from './components/Nav'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/form' element={<FormView />} />
          <Route path='/movies' element={<MoviesView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
