// This is where every action is going to evaluate that's going to committed on our state like getting data from an API, creating a new POST Request

import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
