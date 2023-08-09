import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

type ButtonProps = {
  btnText: string,
  toggleNav?: boolean
}

const Button = ({btnText, toggleNav}:ButtonProps) => {
  return (
    <button className="flex items-center py-2 px-4 border rounded-lg mt-4 mx-auto hover:bg-gray-400/25 transition-all ease-in-out hover:shadow-xl">{toggleNav && btnText}<PlusIcon className="h-4 w-4 "/></button>
  )
}

export default Button