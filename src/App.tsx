import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import Todolist from "./components/Todolist/Todolist";
import { Todo } from "./models/todo";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  // <></> =>
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };

  const onTaskCompleted = (todo: Todo) => {
    console.log(todo);
    setCompletedTodos([...completedTodos, todo]);
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleSubmitAdd} />
        <Todolist
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={() => onTaskCompleted}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
