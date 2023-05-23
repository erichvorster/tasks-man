import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

const Button = ({btnText}) => {
  return (
    <button className="flex items-center py-2 px-4 border rounded-lg mt-4 mx-auto hover:bg-slate-400/25 transition-all ease-in-out hover:shadow-xl">{btnText}<PlusIcon className="h-4 w-4 ml-2"/></button>
  )
}

export default Button