import React from 'react'
import {useState} from 'react'
import { getByName } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'

function Search() {

    const dispatch = useDispatch()

    const [city, setCity] = useState('')

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleClick = () => {
        dispatch(getByName(city));
        setCity('')
    }

    return (
        <div>
            <input type='text' onChange={handleChange}/>
            <button onClick={handleClick}>send</button>
        </div>
    )
}

export default Search