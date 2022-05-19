import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskManage from './Pages/TaskManage/TaskManage';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import AddTask from './Pages/Addtask/Addtask';
import Footer from './Pages/Footer/Footer';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<RequireAuth><AddTask></AddTask></RequireAuth>}></Route>
        <Route path='/taskmanager' element={<RequireAuth><TaskManage></TaskManage></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
