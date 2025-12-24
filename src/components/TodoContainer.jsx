import AddtodoForm from "./AddtodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
function  TodoContainer() {
     const [activityarr, setActivityarr] = useState([
    {
      id: 1,
      activity: "Go for a walk",
    },
    {
        id: 2,
        activity: "Read a book",
    },
    {
        id: 3,
        activity: "Practice coding",
    },
    {
        id: 4,
        activity: "Cook a new recipe",
    },
  ]);
  return (
  
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddtodoForm activityarr={activityarr} setActivityarr={setActivityarr} />
        <TodoList activityarr={activityarr} setActivityarr={setActivityarr} />
      </div>
    </div>
  );
}
export default TodoContainer;
