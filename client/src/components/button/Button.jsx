import { useState } from "react";

function Button({ text, click }) {
  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {/* <p>Value : {count}</p> */}
      <button onClick={click}>{text}</button>
    </div>
  );
}

export default Button;
