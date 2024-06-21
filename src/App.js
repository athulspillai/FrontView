
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Products from './components/Products/Products';
import Contactus from './components/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
