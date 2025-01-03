// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StudentList } from './pages/StudentList';
import { StudentResgistration } from './pages/StudentResgistration';
import { Test } from './components/Test';

function App() {
  return (
    <div className="w-[60%] bg-gray-100 m-auto mt-20 pt-4 rounded-md">
      <Routes>
        <Route path='/' element={<StudentList/>} />
        <Route path='/register' element={<StudentResgistration/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
