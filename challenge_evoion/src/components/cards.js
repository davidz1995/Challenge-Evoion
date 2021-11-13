import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import { store } from '../redux/store'

function Cards() {

    const [show, setShow] = useState(false)
    
    const cities = useSelector(state => state.cities)

    const refresh = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        },500)
    }

    store.subscribe(refresh)

    return (
        <div>
            {cities.length?
                cities.map(city => {
                return (
                <div>
                    <div>
                        <p>{city.name}, {city.sys.country}</p>
                    </div>
                    <div>
                        <p>{city.weather[0].icon}</p>
                        <div>
                            <p>{city.weather[0].main}</p>
                            <p>{city.main.temp}</p>
                        </div>
                    </div>
                </div>
                )
            }
            )
            :null
            }
        </div>
    )
}

export default Cards
