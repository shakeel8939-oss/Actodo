import { useState } from "react";
import Todoitem from "./TodoItem";
function TodoList(props) {
 const activityarr = props.activityarr;
  const setActivityarr = props.setActivityarr;
  return (
    <div className="bg-[#BDB4EA] border p-2 flex-grow rounded-md">
      <h1 className="font-medium text-2xl">Todays activities</h1>
      {activityarr.length === 0?<p>You havent added anything yet</p>:""}
      {
        activityarr.map(function(item,index) {
            return <Todoitem id={item.id } item={item} index={index} activityarr={activityarr} setActivityarr={setActivityarr} />;
        })

      }
    </div>
  );
}
export default TodoList;
