import React from 'react'
import { useDispatch } from 'react-redux'
import {modalHandler} from '../../store/reducers/global'

const MainButton = ({text , classes , type}) => {
    const dispatch = useDispatch();

    const clickHandler = ()=> {
        // dispatch(modalHandler(''));
    }

  return (
    <button 
        className={`rounded-md bg-purple-800 px-3 py-2 text-white ${classes}`} 
        onClick={clickHandler}
        type={type}
    > {text}
    </button>
  )
}

export default MainButton