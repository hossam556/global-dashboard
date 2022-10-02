import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseButton from '../ui/CloseButton'

export default function BasicModal({title , maxWidth , minWidth = 400 , children}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width,
    maxWidth,
    minWidth,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

  return (
    <div>
      <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseButton/>
          <h1 className='text-xl font-semibold capitalize'>
            {title}
          </h1>
          <div className='mt-2'>
            {children}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
