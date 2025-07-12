import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Mainpage from './pages/Mainpage';
import PlacePintPage from './pages/PlacePintPage';
import TimePintPage from './pages/TimePintPage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Mainpage />} />
      <Route path="/place" element={<PlacePintPage />} />
      <Route path="/time" element={<TimePintPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;