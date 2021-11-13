import React, {useState} from 'react'
import { getByName } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'
//CSS
import '../styles/search.css'

function Search() {

    const dispatch = useDispatch()

    const [city, setCity] = useState('')

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getByName(city));
        setCity('')
    }

    return (
        <div>
        <form onSubmit={handleClick}>
            <input type='text' onChange={handleChange} className='input_search' value={city} placeholder={'Search other cities...'}/>
        </form>
        </div>
    )
}

export default Search