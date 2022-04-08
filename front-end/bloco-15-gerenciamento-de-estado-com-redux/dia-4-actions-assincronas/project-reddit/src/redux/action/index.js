import API_URL from "../../ApiUrl";

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const  requestApi = () => ({type: DATA_REQUEST})
export const  requestApiSuccess = (data) => ({type: DATA_SUCCESS, data})
export const  requestApiFailure = (error) => ({type: DATA_FAILURE, error})

export const fetchAPI = (search) => {
  return (dispatch) => {
    dispatch(requestApi());
    return  API_URL(search)
      .then(
      (json) => dispatch(requestApiSuccess(json)),
      (error) => dispatch(requestApiFailure(error.message)))
  }
}
