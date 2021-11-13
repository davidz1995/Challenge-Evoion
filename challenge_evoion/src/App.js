import './App.css';
import { useEffect } from 'react';
import MedellinCard from './components/medellinCard';
import { getMedellin } from './redux/actions/actions';
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMedellin())
  },[dispatch]);

  return (
    <div className="App">
      <MedellinCard/>
    </div>
  );
}

export default App;
