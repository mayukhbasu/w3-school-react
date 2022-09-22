import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import Card from './Pages/Card/Card';
import CollapseSidebar from './Pages/Collapsibile-Sidebar/CollapseSidebar';
import DeleteModal from './Pages/DeleteModal/DeleteModal';
import DisplayHover from './Pages/DisplayHover/DisplayHover';
import FlipCard from './Pages/Flipcard/FlipCard';
import FullScreenVideo from './Pages/FullScreenVideo/FullScreenVideo';
import Loader from './Pages/Loader/Loader';
import Modal from './Pages/Modal/Modal';
import Popups from './Pages/Popups/Popups';
import ProgressBar from './Pages/ProgressBar/ProgressBar';
import ResponsiveSidebar from './Pages/Responsive-Search/ResponsiveSidebar';
import ScrollIndicator from './Pages/ScrollIndicator/ScrollIndicator';
import Search from './Pages/Search/Search';
import Skillbar from './Pages/Skillbar/Skillbar';
import Snackbar from './Pages/Snackbar/Snackbar';
import Star from './Pages/Star/Star';
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
          <Route path='/calender' element={<Calender/>}/>
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/flip' element={<FlipCard/>}/>
          <Route path='/snack' element={<Snackbar/>}/>
          <Route path='/star' element={<Star/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/sidebar' element={<ResponsiveSidebar/>}/>
          <Route path='/csidebar' element={<CollapseSidebar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
