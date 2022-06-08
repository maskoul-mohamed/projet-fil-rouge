import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
