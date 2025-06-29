type Action = { type: "increment" | "decrement" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(0, { type: "increment" }));

console.log(reducer(7, { type: "decrement" }));
