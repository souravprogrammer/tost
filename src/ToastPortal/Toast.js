import React from 'react'

export default function Toast({ mode, message , onClose }) {

    const style = {
        border : '1px solid #000',
        borderRadius  : "10px",
        padding : "10px",
        margin  : "5px"
        
    }
  return (
    <div  onClick={onClose}  style={style} >{message}</div>
  )
}
