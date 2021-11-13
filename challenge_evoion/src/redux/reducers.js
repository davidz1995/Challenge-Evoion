import { GET_BYNAME } from "./actions/actionTypes";

let cities = []

const initialState = {
    getByName: [],
    cities: cities
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BYNAME :
        cities.push(action.payload)
      return {
        ...state,
        getByName: action.payload
      }
      default:
        return {
          ...state
        }
      }
  }

export default reducer 