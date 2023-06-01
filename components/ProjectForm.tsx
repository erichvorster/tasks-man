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

const ProjectForm = ({
  setProjects,
  hideOverlay,
}: ProjectFormProps) => {
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
      <ColorPicker onColorChange={handleColorChange} />
      <div className="mb-6">
        <label>
          <input
            type="text"
            name="name"
            value={project.name}
            placeholder="Untitled"
            className="text-4xl font-bold"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mt-4">
        <label>
          Deadline:
          <input
            type="date"
            name="deadline"
            value={project.deadline}
            onChange={handleDateChange}
            className="p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mt-2">
        <label>
          Tags:
          <input
            type="text"
            name="tags"
            value={project.tags}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mt-2">
        <label>
          Priority:
          <select
            name="priority"
            value={project.priority}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <div className="mt-2">
        <label>
          Description:
          <textarea
            name="projectDescription"
            value={project.projectDescription}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          ></textarea>
        </label>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
          Close
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
