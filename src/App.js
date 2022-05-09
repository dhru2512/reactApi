
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './component/home';
import { Header, Footer, Login } from './component';
import PostDetails from './component/main/postdetails';
import { useAuth0 } from '@auth0/auth0-react'




function App() {

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();


  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<><Header /> <Footer /></> }>
          
          <Route index element={!isAuthenticated?<Login />: <Home/>} />
          {/* <Route path="/Login" element={<Login />}></Route> */}
          <Route path="postDetails" element={<PostDetails />} />
        </Route>
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
