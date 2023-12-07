export default function Home({ project }) {
  return (
    <div className="flex flex-col items-center w-2/3">
      <img className="w-24 h-24" src="/src/assets/no-projects.png" />
      <h2 className="text-zinc-600 font-semibold text-2xl pt-6 pb-4">
        No project selected
      </h2>
      <p className="text-zinc-400 text-xl font-medium pb-10">
        Select a project or get started with a new one.
      </p>
      <div>
        <button
          className="px-8 py-3 bg-zinc-800 text-zinc-400 font-medium rounded"
          type="submit"
          onClick={project}
        >
          Create New Project
        </button>
      </div>
    </div>
  );
}
