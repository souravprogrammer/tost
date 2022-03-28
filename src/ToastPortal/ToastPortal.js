import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useToastPortal } from "./hooks/ToastPortalHook";

import ReactDOM from "react-dom";
import { uuidv4 } from "./uniqueId";
import Toast from "./Toast";

function ToastPortal({ list, autoClose = false, autocloseTime = 2000 }, ref) {
  //  [{message : " this is a toast 1" , mode : "info", id : uuidv4()}

  const [toasts, setToasts] = useState([]);
  const { loaded, id } = useToastPortal();
  const [closeToast , setCloseToast] = useState('')

  useEffect(()=>{

    // setToasts(toasts.filter(t=>t!==))
    removeToast(closeToast)

  },[closeToast])
  useEffect(() => {
    if (autoClose) {
      if (toasts.length) {
        setTimeout(() => {

            setCloseToast( toasts[toasts.length-1].id)
            console.log("calling..")

        }, autocloseTime);
      }
    }
  }, [toasts, setCloseToast]);

  // passing the add toast methot to the outer paprent to access it uning a useref
  useImperativeHandle(ref, () => ({
    addToast(toast) {
      setToasts([...toasts, { ...toast, id: uuidv4() }]);
    },
  }));

  const removeToast = (id) => {
    setToasts(toasts.filter((t) => t.id !== id));
  };

  return loaded ? (
    ReactDOM.createPortal(
      <div>
        {toasts.map((t) => {
          return (
            <Toast
              key={t.id}
              CustomView={t.CustomView}
              message={t.message}
              onClose={() => {
                removeToast(t.id);
              }}
            />
          );
        })}
      </div>,
      document.getElementById(id)
    )
  ) : (
    <></>
  );
}

export default forwardRef(ToastPortal);
