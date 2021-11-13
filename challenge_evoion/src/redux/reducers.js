import { GET_BYNAME, GET_MEDELLIN } from "./actions/actionTypes";

let cities = []

const initialState = {
    getByName: [],
    cities: cities,
    medellin: []
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BYNAME :
        cities.push(action.payload)
      return {
        ...state,
        getByName: action.payload
      }
    case GET_MEDELLIN :
        return {
            ...state,
            medellin: action.payload
        }
      default:
        return {
          ...state
        }
      }
  }

export default reducer 