import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {modalHandler} from '../../store/reducers/global'
import Table from '../../components/ui/Table'
import CreateButton from '../../components/ui/CreateButton'
import CreateProjectModal from '../../components/projects/CreateProjectModal'

const Projects = () => {
  const modalState = useSelector((state) => state.global.modal)
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(modalHandler('homeCreateModal'))
  }
    
  return (
    <div>
        <Table/>
        <CreateButton clickHandler={openCreateModal}/>
        {
          modalState === 'homeCreateModal' && 
          <CreateProjectModal/>
        }
    </div>
  )
}

export default Projects