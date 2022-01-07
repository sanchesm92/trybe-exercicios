import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "../action"

const INITIAL_STATE = {
  data: [],// array de obj
  loading: false,
  error: '',
}

const fetchReducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
  case DATA_REQUEST:
    return {...state, loading: true}
  case DATA_SUCCESS:
    return {...state, loading: false, data: action.data}
  case DATA_FAILURE:
    return {...state, loading: false, error: action.error}
  default:
    return state
  }
}

export default fetchReducer