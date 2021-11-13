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
      <div className='panel'>
        <Search/>
        <Cards/>
      </div>
      <MedellinCard/>
    </div>
  );
}

export default App;
