import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { store } from '../redux/store'
//Icons
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
//CSS
import '../styles/medellinCard.css'

function MedellinCard() {

    const [show, setShow] = useState(false)

    let medellin = useSelector(state => state.medellin)

    const refresh = () => {
        setShow(true)
    }

    store.subscribe(refresh)
    
    const ICON = () => {
        if(medellin.weather[0].main === 'Clouds'){
        return <CloudIcon style={{'fontSize':'5rem'}}/>
        }
        if(medellin.weather[0].main === 'Rain'){
        return <GrainIcon style={{'fontSize':'5rem'}}/>
        }
        if(medellin.weather[0].main === 'Clear'){
            return <WbSunnyIcon style={{'fontSize':'5rem'}}/>
        }
        if(medellin.weather[0].main === 'Snow'){
            return <AcUnitIcon style={{'fontSize':'5rem'}}/>
        }
        return <WbSunnyIcon/>
    }
  
    return (
        <>
        {medellin && show?
        <div className='container_medellin'>
            <div className='section_one'>
                <p>Current city</p>
                <h1>{medellin.name}, {medellin.sys.country}</h1>
            </div>
            <div className='section_two'>
                <div className='container_icon'>{ICON()}</div>
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
