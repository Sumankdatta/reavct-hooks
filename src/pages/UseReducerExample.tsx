import { useReducer } from "react";

type TAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

const reducer = (currentState: typeof initialState, action: TAction) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "incrementByThree":
      return { count: currentState.count + action.payload };
    case "decrement":
      return { count: currentState.count - 1 };

    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center">
      <h1 className="text-5xl mb-6 text-pink-400">{state.count}</h1>

      <button
        onClick={() => dispatch({ type: "increment", payload: 0 })}
        className="btn btn-secondary text-xl me-1 font-bold"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "incrementByThree", payload: 3 })}
        className="btn btn-secondary text-xl me-1 font-bold"
      >
        IncrementByThree
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 0 })}
        className="btn btn-secondary text-xl me-1"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
