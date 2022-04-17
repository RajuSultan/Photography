import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Signin from './Component/Login/Signin/Signin';
import Resistation from './Component/Login/Signin/Resistation/Resistation';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Checkout from './Component/Home/Checkout/Checkout';
import Notfound from './Component/Notfound/Notfound';
import Blogs from './Component/Blogs/Blogs';
import Aboutme from './Component/Aboutme/Aboutme';

function App() {
  return (
    <div className="">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/resistation' element={<Resistation></Resistation>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/checkout/:id' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
