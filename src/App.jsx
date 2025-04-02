import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css'
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import Notfound from './pages/Notfound';
import {getEmotionImage} from "./util/get-emotion-image.js";
function App() {

  const nav = useNavigate();

  const onClickBtn = ()=>{
    nav('/new');
  }

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={'/'}>home</Link>
        <Link to={'/new'}>new</Link>
        <Link to={'/diary'}>diary</Link>
      </div>
      <button onClick={onClickBtn}>버튼입니다</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
