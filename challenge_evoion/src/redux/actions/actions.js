import { GET_BYNAME} from "./actionTypes";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=`

export const getByName = (name) => {
  return async (dispatch) => {
    if (name) {
      const response = await axios.get(`${API_URL}${name}&appid=${API_KEY}`)
      let error = [{name: 'Not found'}]
      if(response.status === 200) dispatch({type: GET_BYNAME, payload: response.data})
      if(response.status === 404) dispatch({type: GET_BYNAME, payload: error})
    } 
  }
}




