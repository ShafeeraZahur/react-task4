
import './App.css';

import { Route,Routes } from 'react-router-dom';
import All from './Component/AllNav';
import FullStackDevelopment from './Component/FullStackDevelopment';
import DataScience from './Component/DataScience';
import CyberSecurity from './Component/CyberSecurity';
import Career from './Component/Career';
// import ReadMore from './Component/ReadMore';
import ReadMorePageone from './Readmorepage1';
import ReadMorePagetwo from './Readmorepage2';
import ReadMorePagethree from './Readmorepage3';
import ReadMorePagefour from './Readmorepage4';
import ReadMorePagefive from './Readmorepage5';
import ReadMorePagesix from './Readmorepage6';
import ReadMorePageseven from './Readmorepage7';
import ReadMorePageeight from './Readmorepage8';
import ReadMorePagenine from './Readmorepage9';



function App() {
  return (
<>
{/* <Navbar/> */}
<Routes>
  <Route path='/' element={<All/>} />
  <Route path='/fsd' element={<FullStackDevelopment/>} />
  <Route path='/datascience' element={<DataScience/>} />
  <Route path='/cybersecurity' element={<CyberSecurity/>} />
  <Route path='/career' element={<Career/>} />
  <Route path="/readmorepageone" element={<ReadMorePageone/>} />
  <Route path='/readmorepagetwo' element={<ReadMorePagetwo/>}/>
  <Route path='/readmorepagethree' element={<ReadMorePagethree/>}/>
  <Route path='/readmorepagefour' element={<ReadMorePagefour/>}/>
  <Route path='/readmorepagefive' element={<ReadMorePagefive/>}/>
  <Route path='/readmorepagesix' element={<ReadMorePagesix/>}/>
  <Route path='/readmorepageseven' element={<ReadMorePageseven/>}/>
  <Route path='/readmorepageeight' element={<ReadMorePageeight/>}/>
  <Route path='/readmorepagenine' element={<ReadMorePagenine/>}/>
  
  
</Routes>
</>
  );
}

export default App;
