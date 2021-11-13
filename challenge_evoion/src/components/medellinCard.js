import React from 'react'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

function MedellinCard() {

    const [state, setState] = useState(false)
    let medellin = useSelector(state => state.medellin)

    useEffect(() => {
        setTimeout(() => {
          setState(true)
        }, 1000);
      }, []);
  
    return (
        <>
        {medellin && state?
        <div>
            <div>
                <h3>Current city</h3>
                <h1>{medellin.name}, {medellin.sys.country}</h1>
            </div>
            <div>
                <div>{medellin.weather[0].icon}</div>
                <div>
                    <h2>{medellin.main.temp}</h2>
                    <h3>{medellin.weather[0].main}</h3>
                </div>
            </div>
            <div>
                <div>
                    <p>{medellin.main.temp_min}</p>
                    <p>Temp. minimum</p>
                </div>
                <div>
                    <p>{medellin.main.temp_max}</p>
                    <p>Temp. maximun</p>
                </div>
                <div>
                    <p>{medellin.main.feels_like}</p>
                    <p>Feels like</p>
                </div>
                <div>
                    <p>{medellin.main.humidity}</p>
                    <p>Humidity</p>
                </div>
            </div>
            </div>
        :null}
        </>
    )
}

export default MedellinCard
