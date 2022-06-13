import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import AddPost from './components/AddPost';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import MainAppBar from './components/MainAppBar/MainAppBar';
import PickTemplatePage from './components/PickTemplatePage';

function App() {
  return (
    <div >
      <MainAppBar />
      {/* <ResumeBuilder /> */}
      <PickTemplatePage />
    </div>
  );
}

export default App;
