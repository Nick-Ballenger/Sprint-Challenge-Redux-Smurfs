/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const SMURFS_GOT = 'SMURFS_GOT';
export const ADD_SMURF  = 'ADD_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR ='ERROR';


const url = 'http://localhost:3333/'

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  })
  axios
  .get(`${url}smurfs`)
  .then(response => {
    dispatch({
      type: SMURFS_GOT, 
      payload: response.data
    })
  })
  .catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}