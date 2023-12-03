import Project from "./Components/Project";
import Home from "./Components/Home";
import { useState, useRef } from "react";

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [saveProject, setSaveProject] = useState(false);
  function handleCreateProject() {
    setCreateProject((value) => !value);
  }
  function handleSave() {
    setSaveProject((value) => !value);
    setCreateProject(!createProject);
    // setCreateProject((value) => !value);
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
          >
            +Add Project
          </button>
        </div>

        <div className="w-3/5 mx-auto px-1 py-24 pr-28">
          {createProject ? (
            <Project saveCreatedProject={handleSave} />
          ) : (
            <Home />
          )}
          {createProject && saveProject ? <Home /> : null}
          <div>
            <button
              className="px-8 py-3 bg-zinc-800 text-zinc-400 font-medium rounded"
              type="submit"
              onClick={handleCreateProject}
            >
              Create New Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
