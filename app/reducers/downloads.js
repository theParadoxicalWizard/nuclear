import {
  ADD_TO_DOWNLOADS
} from '../actions/downloads';

const initialState = {
  queue: []
};

export default function DownloadsReducer(state=initialState, action) {
  switch (action.type) {
  case ADD_TO_DOWNLOADS:
    return Object.assign({}, state, {
      queue: [...state.queue, action.track]
    });
  default:
    return state;
  }
}
