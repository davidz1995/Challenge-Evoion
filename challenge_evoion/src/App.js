import './App.css';
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getByName, getMedellin } from './redux/actions/actions';

function App() {
  
  let medellin = useSelector(state => state.medellin)
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  useEffect(() => {
      dispatch(getMedellin())
    },[dispatch]);

  let handleChange = (e) => {
    setName(e.target.value)
  }

  let handleClick = (e) => {
    e.preventDefault()
    dispatch(getByName(name))
  }

  return (
    <div className="App">
     <input type='text' onChange={handleChange}/>
     <button onClick={handleClick}>Send</button>
     {medellin?
     <h1>{medellin.name}</h1>
     :null
     }
    </div>
  );
}

export default App;
