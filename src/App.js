import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FullScreenVideo from './Pages/FullScreenVideo/FullScreenVideo';
import Modal from './Pages/Modal/Modal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullScreenVideo/>}/>
          <Route path='/modal' element={<Modal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
