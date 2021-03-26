import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { CreateAvatar } from './components/CreateAvatar';
import { Home } from './components/Home';
import { UpdateAvatar } from './components/UpdateAvatar';

function App() {
  return <>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={CreateAvatar} />
        <Route path="/update" exact component={UpdateAvatar} />
      </div>
    </BrowserRouter>
  </>

}

export default App;
