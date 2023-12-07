import Project from "./Components/Project";
import Home from "./Components/Home";
import InputForm from "./Components/InputForm";
import Tasks from "./Components/Tasks";
import { useState, useRef } from "react";
const taskdetails = [];
function App() {
  const [createProject, setCreateProject] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [projectClicked, setProjectClicked] = useState();

  const [save, setSave] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    projects: [],
  });
  // const [taskDetails, setTaskDetails] = useState({ tasks: [] });
  const tasks = useRef();

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  function handleSave() {
    setSave((value) => !value);
    setAddProject((value) => !value);
    handleGetInputs();
  }

  function handleAddProject() {
    if (addProject === false) setAddProject((value) => !value);
  }

  function handleGetInputs() {
    let projectData;
    setProjectDetails((previousDetails) => {
      projectData = {
        title: title.current.value,
        description: desc.current.value,
        dueDate: date.current.value,
      };
      // const newProject = {
      //   ...projectData,
      //   id: Math.random(),
      // };

      return {
        projects: [...previousDetails.projects, projectData],
      };
    });
  }

  function handleDisplayProject(projectTitle) {
    setProjectClicked(projectTitle);
  }

  function handleAddTasks(clickedProjectTitle) {
    console.log(projectDetails);
    console.log(clickedProjectTitle);

    projectDetails.projects.map((project) => {
      if (project.title === clickedProjectTitle) {
        project.tasks
          ? (project.tasks = [tasks.current.value, ...project.tasks])
          : (project.tasks = [tasks.current.value]);

        setProjectDetails((previousDetails) => {
          return {
            projects: [...previousDetails.projects],
          };
        });
      }
    });

    console.log(projectDetails);
  }

  function handleDeleteProject(clickedProjectTitle) {
    setProjectDetails((previousDetails) => {
      const updatedProject = previousDetails.projects.filter(
        (project) => project.title !== clickedProjectTitle
      );
      console.log(projectDetails);
      console.log(updatedProject);
      return {
        projects: [...updatedProject],
      };
    });
  }

  function handleDeleteTask(taskId, clickedProjectTitle) {
    setProjectDetails((previousDetails) => {
      previousDetails.projects.map((project) => {
        console.log(taskId);
        project.tasks.splice(taskId, 1);
      });
      return {
        projects: [...previousDetails.projects],
      };
    });
  }
  console.log(projectDetails.projects);

  return (
    <>
      <div className="  flex flex-row my-24 gap-8">
        <div className="bg-black w-1/3 font-semibold text-lg md:w-72 tracking-wide h-screen rounded-r-3xl pt-28 px-8">
          <h2 className=" text-white tracking-wider">YOUR PROJECTS</h2>
          <div>
            <button
              className=" py-2 my-4 bg-zinc-800 text-zinc-500 font-medium rounded text-center"
              type="click"
              onClick={handleAddProject}
            >
              +Add Project
            </button>
          </div>
          <ul>
            {projectDetails.projects.map((project) => (
              <li>
                <button
                  className="text-stone-500 hover: hover:bg-stone-800 text-left w-full py-1 rounded-sm"
                  id={project.title}
                  onClick={() => handleDisplayProject(project.title)}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[35rem] px-1 py-24 pr-28">
          {projectClicked ? (
            <Tasks
              ref={tasks}
              projectDetails={projectDetails}
              clickedProjectTitle={projectClicked}
              onAdd={handleAddTasks}
              onDeleteProject={handleDeleteProject}
              onDeleteTask={handleDeleteTask}
            />
          ) : addProject || (createProject && save) ? (
            <>
              <div className="text-lg flex float-right">
                <p className="text-black font-medium px-6 py-2">
                  <button type="submit">Cancel</button>
                </p>
                <p className="bg-black text-yellow-50 font-bold px-2 py-2 w-20 text-center rounded">
                  <button onClick={handleSave} type="submit">
                    Save
                  </button>
                </p>
              </div>

              <div className="pt-10 pb-5">
                <InputForm
                  ref={title}
                  type="text"
                  labelName="TITLE"
                ></InputForm>
                <InputForm
                  ref={desc}
                  type="text"
                  textarea
                  labelName="DESCRIPTION"
                ></InputForm>
                <InputForm
                  ref={date}
                  type="date"
                  labelName="DUE DATE"
                ></InputForm>
              </div>
            </>
          ) : (
            <Home project={handleAddProject} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
