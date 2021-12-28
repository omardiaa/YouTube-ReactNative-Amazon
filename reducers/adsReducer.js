export default function adsReducer(state = [], action) {
  switch (action.type) {
    case "ads/update":
      return [...state, action.payload];
    default:
      return state;
  }
}
