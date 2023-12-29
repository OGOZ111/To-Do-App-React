import "./App.css";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";

function App() {
  return (
    <>
      <TodoWrapperLocalStorage />
    </>
  );
}

export default App;
