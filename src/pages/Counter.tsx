import { Dispatch } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ counter, setCounter }: TCounter) => {
  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter((prevState) => prevState - 1);
      }, 2000);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl mb-6 text-pink-400">{counter}</h1>

      <button
        className="btn btn-secondary text-xl me-1 font-bold"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary text-xl me-1"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className="btn btn-secondary text-xl"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
