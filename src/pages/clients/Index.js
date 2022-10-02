import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {modalHandler} from '../../store/reducers/global'
import Table from '../../components/ui/Table'
import CreateButton from '../../components/ui/CreateButton'
import CreateClientsModal from '../../components/clients/CreateClientsModal'

const Clients = () => {
  const modalState = useSelector((state) => state.global.modal)
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(modalHandler('clientsCreateModal'))
  }
    
  return (
    <div>
      Iamm clieent
        <Table/>
        <CreateButton clickHandler={openCreateModal}/>
        {
          modalState === 'clientsCreateModal' && 
          <CreateClientsModal/>
        }
    </div>
  )
}

export default Clients