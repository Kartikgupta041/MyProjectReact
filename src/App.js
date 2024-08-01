
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBooks from './components/AddBooks';
import Books from './components/Books';
import EditBooks from './components/EditBooks';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Books App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/books/:id' element={<EditBooks/>}/>     
          <Route path='/books/add' element = {<AddBooks/>}/>
      </Routes>
    </div>
  );
}

export default App;
