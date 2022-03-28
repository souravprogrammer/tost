import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button  onClick={()=>{ props.arg.current.addToast({message : " this is a toast 1" , mode : "info"})}} >test</button>
    </div>
  )
}
