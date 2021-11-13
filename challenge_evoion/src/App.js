import './App.css';
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getByName } from './redux/actions/actions';

function App() {

  const CITIES = useSelector(state => state.cities)
  let medellin = CITIES.find(e => e.name === 'Medellín')

  const dispatch = useDispatch()

  const [name, setName] = useState('')

  let handleChange = (e) => {
    setName(e.target.value)
  }

  let handleClick = (e) => {
    e.preventDefault()
    dispatch(getByName(name))
    console.log(medellin)
  }

  useEffect(() => {
    dispatch(getByName('Medellin'))
   },[dispatch]);

  return (
    <div className="App">
     <input type='text' onChange={handleChange}/>
     <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default App;
