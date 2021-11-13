import './App.css';
import { useEffect } from 'react';
import MedellinCard from './components/medellinCard';
import Search from './components/search';
import { getByName, getMedellin } from './redux/actions/actions';
import { useDispatch } from 'react-redux'
import Cards from './components/cards';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMedellin())
    getByName()
  },[dispatch]);

  return (
    <div className="App">
      <Search/>
      <MedellinCard/>
      <Cards/>
    </div>
  );
}

export default App;
