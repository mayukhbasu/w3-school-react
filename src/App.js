import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeleteModal from './Pages/DeleteModal/DeleteModal';
import FullScreenVideo from './Pages/FullScreenVideo/FullScreenVideo';
import Modal from './Pages/Modal/Modal';
import ProgressBar from './Pages/ProgressBar/ProgressBar';
import ScrollIndicator from './Pages/ScrollIndicator/ScrollIndicator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullScreenVideo/>}/>
          <Route path='/modal' element={<Modal/>}/>
          <Route path='/delete' element={<DeleteModal/>}/>
          <Route path='/scroll' element={<ScrollIndicator/>}/>
          <Route path='/progress' element={<ProgressBar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
