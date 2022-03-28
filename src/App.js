import logo from './logo.svg';
import './App.css';
import ToastPortal from './ToastPortal/ToastPortal';
import { useRef, useState } from 'react';
import Child from './Child';


function ToastCustom({ mode, message , onClose }){

  const style ={
    // border : "1px solid #000",
    backgroundColor : "green" ,
    padding : "20px",
    color : "#fff",
    borderRadius : "10px"
  }
  return <div style={style} >

    <div>{message}</div>

  </div>
}


function App() {
  const toastRef = useRef()
  const [ state , setState] = useState(toastRef)
  // {message : " this is a toast 1" , mode : "info", id : uuidv4()}

  const addToast = ()=>{
    toastRef.current.addToast({message : " this is a toast 1" , mode : "info" , CustomView : ToastCustom})

  }

  return (
    <div className="App">
      <div>
        <button onClick={ ()=> {
          console.log("click")
          addToast() }}  >open</button>
        <button>info</button>
        <button>error</button>
        <Child  arg = {state} />
      </div>

      <ToastPortal ref={toastRef} autoClose={true} autocloseTime={5000}/>
    </div>
  );
}

export default App;
