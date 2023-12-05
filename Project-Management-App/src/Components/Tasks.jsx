import { useRef, useState } from "react";
export default function Tasks({ projectDetails, clickedProjectTitle }) {
  const [taskDetails, setTaskDetails] = useState([]);
  const tasks = useRef();

  function handleAddTasks() {
    setTaskDetails((previousTasks) => [tasks.current.value, ...previousTasks]);
    console.log(taskDetails);
  }

  return (
    <>
      {/* <div>{projectDetails}</div> */}
      <div className="pb-4">
        {projectDetails.projects.map(
          (project) =>
            project.title === clickedProjectTitle && (
              <ul>
                <li>
                  <h2 className=" text-3xl font-bold pb-2">{project.title}</h2>
                </li>
                <li>
                  <p className=" text-xs text-zinc-500 font-semibold pb-4">
                    {project.dueDate}
                  </p>
                </li>
                <li>{project.description}</li>
              </ul>
            )
        )}
      </div>
      <hr className=" border-b-2 border-zinc-300"></hr>
      <div>
        <div className="pt-4">
          <label>Tasks</label>
        </div>
        <div>
          <input
            ref={tasks}
            className="bg-zinc-300 border-red-300 pt-2 pb-2 pr-2 mr-4 mb-8 rounded"
            type="text"
          ></input>
          <button onClick={handleAddTasks}>Add Task</button>
        </div>
      </div>
      {taskDetails.length >= 1 ? (
        <div className="bg-zinc-100 pt-2 rounded">
          {taskDetails.map((task) => (
            <ul>
              <li className="p-2">{task}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>This project does not have any projects yet</p>
      )}
    </>
  );
}
