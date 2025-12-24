import React, { useState } from "react";

function AddtodoForm(props) {
  const Activitiesarr = props.activityarr;
  const setActivitiesarr = props.setActivityarr;
  const [newActivity, setNewActivity] = useState("");
  function handlechange(event) {
    setNewActivity(event.target.value);
  }
  function addactivity(event) {
    setActivitiesarr([...Activitiesarr, { id: Activitiesarr.length + 1, activity: newActivity }]);
    setNewActivity("");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input value={newActivity} onChange={handlechange}
          className="border border-black bg-transparent p-1"
          placeholder="Next activities?"
          type="text"
        />
        <button onClick={addactivity} className="bg-black text-white border border-black p-1 hover:cursor-pointer">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddtodoForm;
