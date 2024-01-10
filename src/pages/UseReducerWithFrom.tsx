import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  console.log(action);
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const UseReducerWithFrom = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} className="text-center my-10">
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-indigo-600"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        className="border border-indigo-600 mx-2"
        type="email"
        name="email"
        id="email"
      />
      <button className="btn btn-sm bg-pink-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UseReducerWithFrom;
