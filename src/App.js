import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Portfolio.me' element={<Layout />}>
          {/* Nested route: Home will be rendered within Layout */}
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
