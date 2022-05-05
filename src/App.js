
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './component/home';
import { Header, Footer, Login } from './component';
import PostDetails from './component/main/postdetails';





function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<><Header /> <Footer /></> }>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="postDetails" element={<PostDetails />} />
        </Route>
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
