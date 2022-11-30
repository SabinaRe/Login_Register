import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Login} from './Components/Login';     //named export
import Register from './Components/Register'; //default export
import {Dashboard} from './Components/Dashboard';
import AxiosFetch from './Components/AxiosFetch';
import FileUpload from './Components/FileUpload';
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/axios' element={<AxiosFetch/>}/>
            <Route path='/fileUp' element={<FileUpload/>}/>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
