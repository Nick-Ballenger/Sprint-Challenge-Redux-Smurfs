/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  GET_SMURFS,
  SMURFS_GOT,
  ADD_SMURF,
  SMURF_ADDED,
  ERROR
} from '../actions/index'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
}



export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetching: true
    }

    case SMURFS_GOT:
    return {
      ...state,
      smurfs: action.payload,
      fetching: false
    }

    case ADD_SMURF:
    return {
      ...state,
      adding: true
    }

    case SMURF_ADDED:
    return {
      ...state,
      smurfs: action.payload,
      adding: false
    }

    case ERROR:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

    default:
    return state;
  }
}

export default smurfReducer;