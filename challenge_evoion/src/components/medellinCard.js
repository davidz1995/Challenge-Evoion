import React from 'react'
import {useState } from 'react'
import { useSelector } from 'react-redux';
import { store } from '../redux/store'
import '../styles/medellinCard.css'

function MedellinCard() {

    const [show, setShow] = useState(false)

    let medellin = useSelector(state => state.medellin)

    const refresh = () => {
        setShow(true)
    }

    store.subscribe(refresh)
  
    return (
        <>
        {medellin && show?
        <div className='container_medellin'>
            <div className='section_one'>
                <p>Current city</p>
                <h1>{medellin.name}, {medellin.sys.country}</h1>
            </div>
            <div className='section_two'>
                <div>{medellin.weather[0].icon}</div>
                <div className='subSection_temp'>
                    <h1>{Math.ceil(medellin.main.temp)} &#8451;</h1>
                    <h3>{medellin.weather[0].main}</h3>
                </div>
            </div>
            <div>
                <div className='extra_info'>
                    <p>{Math.ceil(medellin.main.temp_min)} &#8451;</p>
                    <p>Temp. minimum</p>
                </div>
                <div className='extra_info'>
                    <p>{Math.ceil(medellin.main.temp_max)} &#8451;</p>
                    <p>Temp. maximun</p>
                </div>
                <div className='extra_info'>
                    <p>{Math.ceil(medellin.main.feels_like)} &#8451;</p>
                    <p>Feels like</p>
                </div>
                <div className='extra_info'>
                    <p>{Math.ceil(medellin.main.humidity)} &#8451;</p>
                    <p>Humidity</p>
                </div>
            </div>
            </div>
        :null}
        </>
    )
}

export default MedellinCard
