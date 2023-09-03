import './App.css';
import { NavBar } from './Components/NavBar';
import { Route, Routes } from 'react-router';
import { HomeComponent } from './Components/Home';
import { History } from './Components/History';
import { Word } from './Components/Word';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='' element={<HomeComponent />} />
        <Route path='/history' element={<History />} />
        <Route path='/word/:id' element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
