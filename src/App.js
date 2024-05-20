import './App.css';
import BookTable from './components/BookTable';
import Home from './components/Home';
import Nav from './components/header/Nav';

import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav/>
   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/react-test' element={<Home/>} />
          <Route path='/reservation' element={<BookTable/>} />
          


        </Routes>
      

     
      


    
    </div>
  );
}

export default App;
