import React, { useEffect, useState , forwardRef , useImperativeHandle } from "react";
import { useToastPortal } from "./hooks/ToastPortalHook";

import  ReactDOM  from "react-dom";
import { uuidv4 } from "./uniqueId";
import Toast from "./Toast";

 function ToastPortal({ list  }, ref) {
    //  [{message : " this is a toast 1" , mode : "info", id : uuidv4()} 

    const [toasts , setToasts] = useState([])
    const {loaded , id} = useToastPortal()

    // const addToast = (toast)=> {
    //     setToasts( [...toasts , {...toast , id : uuidv4() }])
        
    // }
    useImperativeHandle(ref ,()=>({
        addToast(toast) {
            setToasts( [...toasts , {...toast , id : uuidv4() }])
            
        }

    }) )

    const removeToast = id => {
        setToasts(toasts.filter(t => t.id !== id  ))
    }
  return   loaded ?   ReactDOM.createPortal(<div >
      {

          toasts.map(t=> {
              return <Toast key  = {t.id}  message = {t.message} onClose={()=>{ removeToast(t.id) }} />
          })

      }
  </div>, document.getElementById(id)) : <></>
}


export default forwardRef(ToastPortal)