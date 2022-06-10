import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import AddPost from './components/AddPost';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import MainAppBar from './components/MainAppBar/MainAppBar';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <ResumeBuilder />
    </div>
  );
}

export default App;
