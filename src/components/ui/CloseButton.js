import React from 'react'
import { useDispatch } from 'react-redux'
import {modalHandler} from '../../store/reducers/global'

const CloseButton = () => {
    const dispatch = useDispatch();

    const closeHandler = ()=> {
        dispatch(modalHandler(''));
    }

  return (
    <button 
        className='absolute flex items-center justify-center w-6 h-6 pb-1 text-lg text-white bg-red-400 rounded-full hover:opacity-90 top-2 right-2 ' 
        onClick={closeHandler}
    > x
    </button>
  )
}

export default CloseButton