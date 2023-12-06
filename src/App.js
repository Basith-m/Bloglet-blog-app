import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import QuillEditor from './pages/QuillEditor';
import MyPosts from './pages/MyPosts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogEditor' element={<QuillEditor />} />
        <Route path='/myPosts' element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;
