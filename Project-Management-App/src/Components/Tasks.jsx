import { forwardRef } from "react";

const Tasks = forwardRef(function Tasks(
  { projectDetails, clickedProjectTitle, onAdd, onDeleteProject, onDeleteTask },
  ref
) {
  return (
    <>
      {/* <div>{projectDetails}</div> */}
      <div className="pb-4">
        {projectDetails.projects.map(
          (project) =>
            project.title === clickedProjectTitle && (
              <>
                <ul>
                  <li className="flex">
                    <h2 className=" text-3xl font-bold pb-2 pr-24">
                      {project.title}
                    </h2>
                    <button
                      onClick={() => onDeleteProject(clickedProjectTitle)}
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <p className=" text-xs text-zinc-500 font-semibold pb-4">
                      {project.dueDate}
                    </p>
                  </li>
                  <li className="whitespace-pre-wrap">{project.description}</li>
                </ul>

                <hr className=" border-b-2 border-zinc-300"></hr>
                <div>
                  <div className="pt-4">
                    <label>Tasks</label>
                  </div>
                  <div>
                    <input
                      ref={ref}
                      className="bg-zinc-300 border-red-300 pt-2 pb-2 pr-2 mr-4 mb-8 rounded"
                      type="text"
                    ></input>
                    <button onClick={() => onAdd(clickedProjectTitle)}>
                      Add Task
                    </button>
                  </div>
                </div>
                {project.tasks ? (
                  <div className="bg-zinc-100 pt-2 rounded">
                    {project.tasks.map((task, index) => (
                      <ul className="flex">
                        <li className="p-2 ">{task}</li>
                        <li>
                          <button
                            id={index}
                            onClick={(e) => onDeleteTask(e.target.id)}
                            className="p-2"
                          >
                            Clear
                          </button>
                        </li>
                      </ul>
                    ))}
                  </div>
                ) : (
                  <p>This project does not have any projects yet</p>
                )}
              </>
            )
        )}
      </div>
    </>
  );
});

export default Tasks;
