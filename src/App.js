import logo from './logo.svg';
import './App.css';
import ToastPortal from './ToastPortal/ToastPortal';
import { useRef } from 'react';





function App() {
  const toastRef = useRef()
  // {message : " this is a toast 1" , mode : "info", id : uuidv4()}

  const addToast = ()=>{
    toastRef.current.addToast({message : " this is a toast 1" , mode : "info"})

  }

  return (
    <div className="App">
      <div>
        <button onClick={ ()=> {
          console.log("click")
          addToast() }}  >open</button>
        <button>info</button>
        <button>error</button>
      </div>

      <ToastPortal ref={toastRef} />
    </div>
  );
}

export default App;
