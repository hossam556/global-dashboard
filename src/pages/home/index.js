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
        <Table/>
        <CreateButton clickHandler={openCreateModal}/>
        {
          modalState === 'homeCreateModal' && 
          <Modal
            title='create poject'
            minWidth='700px'
          >
            <form>
              <div className='grid grid-cols-2 gap-10'>
                <TextField id="standard-basic" label="name" variant="standard"/>
                <TextField id="standard-basic" label="age" variant="standard" type='number' />
              </div>
              <MainButton classes='mt-8' text='Create' type='submit'/>
            </form>
          </Modal>
        }
    </div>
  )
}

export default Home