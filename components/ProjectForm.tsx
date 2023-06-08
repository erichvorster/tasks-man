import React, { useState, useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import ColorPicker from "./ColorPicker";

type ProjectFormProps = {
  setProjects?: React.Dispatch<React.SetStateAction<never[]>>;
  hideOverlay: () => void;
};

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000); // Adjust the range as per your needs
};

const ProjectForm = ({ setProjects, hideOverlay }: ProjectFormProps) => {
  const [project, setProject] = useState({
    name: "",
    deadline: "",
    tags: "",
    priority: "",
    todos: [],
    id: generateRandomId().toString(), // Generate a random ID for the project
    projectColor: "", // Add a new property for project color
    projectDescription: "", // Add a new property for project description
  });
  const { setActiveProject } = useContext(ProjectContext);

  const handleColorChange = (color) => {
    setProject((prevState) => ({
      ...prevState,
      projectColor: color, // Update the project color in state
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: new Date(value).toLocaleDateString(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions with the form data here
    setProjects((prevState) => [...prevState, project]);

    if (setActiveProject) {
      setActiveProject(project);
    }
    hideOverlay();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label>
          <input
            type="text"
            name="name"
            value={project.name}
            placeholder="Untitled..."
            className="text-4xl font-bold rounded-md border dark:border-neutral-500 px-2 bg-gray-100 dark:bg-neutral-800 shadow-sm w-full"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mt-2">
        <label className="flex flex-col text-xs font-bold mb-1 ">
          Description:
          <textarea
            name="projectDescription"
            value={project.projectDescription}
            onChange={handleChange}
            placeholder="Add a description"
            className="p-2 border border-gray-300 rounded-md h-32 bg-gray-100 dark:bg-neutral-800 dark:border-neutral-500 shadow-sm"
          ></textarea>
        </label>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mt-2">
          <label className="flex flex-col text-xs font-bold mb-1">
            Deadline:
            <input
              type="date"
              name="deadline"
              value={project.deadline}
              onChange={handleDateChange}
              className="p-2 border border-gray-300 rounded-md bg-gray-100 dark:border-neutral-500 dark:bg-neutral-800 shadow-sm"
            />
          </label>
        </div>
        <div className="mt-2">
          <label className="flex flex-col text-xs font-bold mb-1">
            Tags:
            <input
              type="text"
              name="tags"
              value={project.tags}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md bg-gray-100 dark:border-neutral-500 dark:bg-neutral-800 shadow-sm"
            />
          </label>
        </div>
        <div className="mt-2">
          <label className="flex flex-col text-xs font-bold mb-1">
            Priority:
            <select
              name="priority"
              value={project.priority}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md bg-gray-100 dark:border-neutral-500 dark:bg-neutral-800 shadow-sm"
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <ColorPicker onColorChange={handleColorChange} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 mt-10">
        <button className="border rounded-md py-1 dark:border-neutral-500 dark:text-neutral-300">Close</button>
        <button
          type="submit"
          className="border rounded-md py-1  text-white dark:border-neutral-500 dark:text-neutral-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
