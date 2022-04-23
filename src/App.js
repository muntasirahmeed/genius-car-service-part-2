import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Chekout from './Pages/Chekout/Chekout';
import AddService from './Pages/Home/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import MangeService from './Pages/Home/ManageService/MangeService';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:id' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Chekout></Chekout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
           <MangeService></MangeService>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
