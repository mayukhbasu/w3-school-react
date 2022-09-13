import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FullScreenVideo from './Pages/FullScreenVideo/FullScreenVideo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullScreenVideo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
