
export default function (state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'GIPHY_SEARCH_FULFILLED':
      return action.payload;
    case 'FILTER_GIFS':
      console.log('action.payload: ', action.payload);
      return state.filter((cur) => cur.rating === action.payload);
    default:
      return state;
  }
}
