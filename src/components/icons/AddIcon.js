import React from 'react'

const AddIcon = ({classess}) => {
  return (
    <svg
      className={`${classess}`}
      width="32" 
      height="32" 
      viewBox="0 0 24 24"
    >
        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  )
}

export default AddIcon