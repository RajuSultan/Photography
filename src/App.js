import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Signin from './Component/Login/Signin/Signin';
import Resistation from './Component/Login/Signin/Resistation/Resistation';

function App() {
  return (
    <div className="">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/resistation' element={<Resistation></Resistation>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
