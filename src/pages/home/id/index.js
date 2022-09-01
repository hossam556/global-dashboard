import React , {useContext} from 'react'
import { Link } from "react-router-dom";

const HomeId = () => {

  return (
    <div className=''>
        <div className='p-4 text-lg text-red-500 '>header inner section</div>
        <Link to="/nav" className='p-3 bg-green-500 rounded-lg '>go to nav</Link>
    </div>
  )
}

export default HomeId