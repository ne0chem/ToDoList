import "./Form.scss";
import { useState } from "react";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSumbit = () => {
    if (text.length > 0) {
      props.createNewTodo(text);
      setText("");
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSumbit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
