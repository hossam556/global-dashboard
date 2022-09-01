import React from 'react'
import AddIcon from '../icons/AddIcon'

const CreateButton = ({clickHandler}) => {
  return (
    <button 
      onClick={clickHandler} 
      className='fixed flex items-center justify-center w-[50px] h-[50px] text-2xl text-white transition-all duration-300 bg-black rounded-full hover:opacity-90 bottom-8 right-8'
      > 
        <AddIcon/>
      </button>
  )
}

export default CreateButton