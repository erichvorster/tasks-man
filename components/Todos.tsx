"use client";

import React, { useState, useContext } from "react";
import Todo from "./Todo";
import { createTodo, deleteTodo, getTodos } from "@/app/models/models";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import ProjectContext from "@/context/ProjectContext";

type Todo = {
  id: number;
  title: string;
  description: string;
};



const Todos = () => {
  const [show, setShow] = useState<boolean>(false);
  const {activeProject} = useContext(ProjectContext)

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };




  return (
    <div className="mt-6">
      {show && (
          <Overlay>
            <Modal hideOverlay={hideModal} />
          </Overlay>
        )}
      <div>
        <div className="grid grid-cols-3 bg-slate-100 rounded-lg">
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">To Do</h3>
              <button onClick={showModal} className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
            {/* {activeProject.todos.map((todo) => (
              <Todo  />
            ))} */}
          </div>
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">In Progress</h3>
              <button onClick={showModal} className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">Done</h3>
              <button onClick={showModal} className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
