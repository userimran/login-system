
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Hompage/Homepage';
import Ragister from './components/Ragister/Ragister';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState();
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" > 
     {
        user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
     }
   </Route>
   <Route exact path="login" element={<Login setLoginUser={setLoginUser}/>}></Route>
   <Route exact path="ragister" element={<Ragister/>}/>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
