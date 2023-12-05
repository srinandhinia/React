import Project from "./Components/Project";
import Home from "./Components/Home";
import InputForm from "./Components/InputForm";
import Tasks from "./Components/Tasks";
import { useState, useRef } from "react";

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [projectClicked, setProjectClicked] = useState();
  const [save, setSave] = useState(false);

  const [projectDetails, setProjectDetails] = useState({ projects: [] });
  // const [inputField, setInputField] = useState();

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
        ...previousDetails,
        projects: [...previousDetails.projects, projectData],
      };
    });

    console.log(projectDetails);
    projectDetails.projects.map((project) => console.log(project));
  }

  function handleDisplayProject(projectTitle) {
    setProjectClicked(projectTitle);
  }

  return (
    <>
      <div className="w-full flex flex-row my-24 ">
        <div className="bg-black w-1/3 font-semibold text-lg tracking-wide h-screen rounded-r-3xl text-center pt-28">
          <h2 className=" px-3 pb-6  text-white tracking-wider">
            YOUR PROJECTS
          </h2>
          <div>
            <button
              className="px-4 py-2 my-4 bg-zinc-800 text-zinc-500 font-medium rounded"
              type="click"
              onClick={handleAddProject}
            >
              +Add Project
            </button>

            <div className="flex flex-auto flex-col m-1 ">
              {projectDetails.projects.map((project) => (
                <div className="bg-zinc-500 m-2 ">
                  <button
                    key={project.title}
                    onClick={() => handleDisplayProject(project.title)}
                  >
                    {project.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-3/5 mx-auto px-1 py-24 pr-28">
          {projectClicked ? (
            <Tasks
              projectDetails={projectDetails}
              clickedProjectTitle={projectClicked}
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
                <InputForm ref={title} labelName="TITLE"></InputForm>
                <InputForm ref={desc} labelName="DESCRIPTION"></InputForm>
                <InputForm ref={date} labelName="DUE DATE"></InputForm>
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
