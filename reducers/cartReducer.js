export default function cartReducer(state = [], action) {
  console.log("Current State: ", state);
  switch (action.type) {
    case "cart/add":
      found = false;
      state.forEach(cur => {
        if (cur.id == action.payload.id) {
          found = true;
          cur.quantity++;
          return [...state];
        }
      });
      if (!found) {
        action.payload.quantity = 1;
        return [...state, action.payload];
      }
    default:
      return state;
  }
}
