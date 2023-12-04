import Project from "./Components/Project";
import Home from "./Components/Home";
import InputForm from "./Components/InputForm";
import { useState, useRef } from "react";

function App() {
  const [createProject, setCreateProject] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    projects: [],
  });
  // const [inputField, setInputField] = useState();

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  function handleCreateProject() {
    setCreateProject((value) => !value);
  }

  function handleCreate_Save() {
    handleCreateProject();
    handleGetInputs();
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
  }

  return (
    <>
      <div className="w-full flex my-24">
        <div className="bg-black w-1/3 font-semibold text-lg tracking-wide h-screen rounded-r-3xl text-center pt-28">
          <h2 className=" px-3 pb-6  text-white tracking-wider">
            YOUR PROJECTS
          </h2>
          <button
            className="px-4 py-2 bg-zinc-800 text-zinc-500 font-medium rounded"
            type="click"
            onClick={handleCreateProject}
          >
            +Add Project
          </button>
        </div>

        <div className="w-3/5 mx-auto px-1 py-24 pr-28">
          {createProject ? (
            <>
              <div className="text-lg flex float-right">
                <p className="text-black font-medium px-6 py-2">
                  <button type="submit">Cancel</button>
                </p>
                <p className="bg-black text-yellow-50 font-bold px-2 py-2 w-20 text-center rounded">
                  <button onClick={handleCreate_Save} type="submit">
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
            <Home project={handleCreateProject} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
