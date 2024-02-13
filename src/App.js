import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/home"
import AddPage  from './components/AddPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/addpage" Component={AddPage}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App;
