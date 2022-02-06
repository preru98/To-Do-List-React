import './App.css';
import HomePage from './Pages/HomePage';
import ListForm from './Pages/ListForm';
import ItemForm from './Pages/ItemForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {


  return (

    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Listons</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home Page</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addList">Add List</Link>
            </li>
          </ul>
        </div>
      </nav>


      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/addList" element={<ListForm />}></Route>
          <Route path="/:listId/addItem" element={<ItemForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
