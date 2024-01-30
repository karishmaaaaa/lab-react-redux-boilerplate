import { useState } from "react";
import reducer from "./Reducer";
import { createStore } from "redux";
import { decrementAction, incrementAction } from "./Actions";

const store = createStore(reducer);

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => store.dispatch(incrementAction())}>
        LIKE
      </button>
      <button onClick={() => store.dispatch(decrementAction())}>
        UNLIKE
      </button>
    </div>
  );
}