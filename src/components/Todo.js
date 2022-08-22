import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import React from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div>
          <h3>Add Your List Here</h3>
          <div>
            <input
              type="text"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />

            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              +
            </button>
          </div>
          <div>
            {list.map((ele) => {
              return (
                <div key={ele.id}>
                  <h3>{ele.data}</h3>
                  <button onClick={() => dispatch(deleteTodo(ele.id))}>
                    -
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
