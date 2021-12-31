export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "cart/add":
      let tempState = [];
      let found = false;
      for (let i = 0; i < state.length; i++) {
        let cur = state[i];
        if (cur.id == action.payload.id) {
          cur.quantity++;
          console.log("Gotcha!");
          found = true;
        }
        tempState.push(cur);
      }
      if (found) return tempState;

      action.payload.quantity = 1;
      console.log("Gotcha2");
      return [...state, action.payload];
    default:
      return state;
  }
}
