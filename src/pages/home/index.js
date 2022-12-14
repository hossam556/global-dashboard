import React , {useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {modalHandler} from '../../store/reducers/global'
import Table from '../../components/ui/Table'
import CreateButton from '../../components/ui/CreateButton'
import Modal from '../../components/ui/Modal'
import TextField from '@mui/material/TextField';
import MainButton from '../../components/ui/MainButton'

const Home = () => {
  const modalState = useSelector((state) => state.global.modal)
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(modalHandler('homeCreateModal'))
  }
    
  return (
    <div className=''>
      <p className='text-xl text-red-600'>Statistics</p>
    </div>
  )
}

export default Home