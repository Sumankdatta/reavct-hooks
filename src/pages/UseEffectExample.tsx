import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden((prev) => !prev);
  };
  return (
    <div className="text-5xl mb-6 text-pink-400 text-center">
      <button onClick={toggleHidden} className="btn btn-pink-500">
        {hidden ? "show" : "hide"}
      </button>
      {!hidden && <Component />}
    </div>
  );
};

// const Counter = () => {
// const [count, setCount] = useState(0);

// useEffect(() => {
//   const interValid = setInterval(() => {
//     console.log("Render");
//     setCount((prev) => prev + 1);
//   }, 1000);
//   return () => {
//     clearInterval(interValid);
//   };
// }, []);
// return <h1 className="">{count}</h1>;
// };

const Component = () => {
  useEffect(() => {
    console.log("Render");
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));
    return () => {
      controller.abort();
    };
  }, []);

  return <h1></h1>;
};
export default UseEffectExample;
