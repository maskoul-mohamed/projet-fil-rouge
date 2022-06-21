import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import AddPost from './components/AddPost';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import MainAppBar from './components/MainAppBar/MainAppBar';
import PickTemplatePage from './components/PickTemplatePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
    <div >

      <MainAppBar />
      <Routes >
        <Route exact path="/register" element={<SignUp/>} />
        <Route exact path="/login" element={<SignIn />} />

        <Route exact path="/home" element={<div>hollaa</div>} />
        
        {/* <ResumeBuilder /> */}
        {/* <PickTemplatePage /> */}
      </Routes >
    </div>
    </Router>

  );
}

export default App;
