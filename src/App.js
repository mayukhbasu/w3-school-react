import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeleteModal from './Pages/DeleteModal/DeleteModal';
import DisplayHover from './Pages/DisplayHover/DisplayHover';
import FullScreenVideo from './Pages/FullScreenVideo/FullScreenVideo';
import Modal from './Pages/Modal/Modal';
import Popups from './Pages/Popups/Popups';
import ProgressBar from './Pages/ProgressBar/ProgressBar';
import ScrollIndicator from './Pages/ScrollIndicator/ScrollIndicator';
import Skillbar from './Pages/Skillbar/Skillbar';
import Tooltips from './Pages/ToolTips/Tooltips';
import TreeView from './Pages/TreeView/TreeView';

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
          <Route path='/skill' element={<Skillbar/>}/>
          <Route path='/tooltip' element={<Tooltips/>}/>
          <Route path='/tree' element={<TreeView/>}/>
          <Route path='/hover' element={<DisplayHover/>}/>
          <Route path='/popup' element={<Popups/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
