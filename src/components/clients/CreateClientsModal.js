import React from 'react'
import Modal from '../ui/Modal'
import MainButton from '../ui/MainButton'
import TextField from '@mui/material/TextField';

const CreateProjectModal = () => {
  
    const CreateProject = (e) => {
        e.preventDefault();
    }
  return (
    <Modal
        title='create poject'
        minWidth='700px'
    >
      <form onSubmit={CreateProject}>
        <div className='grid grid-cols-2 gap-10'>
            <TextField id="standard-basic" label="name" variant="standard" type='text'/>
            <TextField id="standard-basic" label="age" variant="standard" type='number' />
        </div>
        <MainButton classes='mt-8' text='Create' type='submit'/>
      </form>
    </Modal>
  )
}

export default CreateProjectModal