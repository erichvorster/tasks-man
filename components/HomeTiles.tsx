'use client'

import React,{useContext} from 'react'
import ProjectContext from '@/context/ProjectContext'

const getTotalTodos = (projects) => {
    let totalTodos = 0
    projects.forEach(project => {
        totalTodos += project.todos.length
    })
    return totalTodos

}

const getTotalTasksInProgress = (projects) => {
    let totalTasksInProgress = 0
    projects.forEach(project => {
        project.todos.forEach(todo => {
            if(todo.category === 'inProgress'){
                totalTasksInProgress++
            }
        })
    })
    return totalTasksInProgress
}

const getTotalTasksDueToday = (projects) => {
    let totalTasksDueToday = 0
    projects.forEach(project => {
        project.todos.forEach(todo => {
            if(todo.dueDate === new Date().toISOString().slice(0,10)){
                totalTasksDueToday++
            }
        })
    })
    return totalTasksDueToday
}



const HomeTiles = () => {
    const {projects} = useContext(ProjectContext)
  return (
    <div className='grid grid-cols-4 gap-4'>
        <div className='border rounded-md p-4 shadow-sm bg-white'>
            <h1 className='text-black/75'>Total Projects</h1>
            <p className='text-3xl font-bold mt-2 text-black/75'>{projects.length}</p>
        </div>
        <div className='border rounded-md p-4 shadow-sm bg-white'>
            <h1 className='text-black/75'>Total Project Tasks</h1>
            <p className='text-3xl font-bold mt-2 text-black/75'>{getTotalTodos(projects)}</p>
        </div>
        <div className='border rounded-md p-4 shadow-sm bg-white'>
            <h1 className='text-black/75'>Tasks In Progress</h1>
            <p className='text-3xl font-bold mt-2 text-black/75'>{getTotalTasksInProgress(projects)}</p>
        </div>
        <div className='border rounded-md p-4 shadow-sm bg-white'>
            <h1 className='text-black/75'>Due Today</h1>
            <p className='text-3xl font-bold mt-2 text-black/75'>{getTotalTasksDueToday(projects)}</p>
        </div>
    </div>
  )
}

export default HomeTiles