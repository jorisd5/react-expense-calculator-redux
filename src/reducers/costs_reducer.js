import { FETCH_COSTS } from '../actions';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_COSTS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
