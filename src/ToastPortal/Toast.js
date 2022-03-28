import React, { useEffect, useState } from 'react'

export default function Toast({ mode, message , onClose , CustomView  }) {

  const [style, setStyle] = useState( {
    // border : '1px solid #000',
    borderRadius  : "10px",
    // padding : "10px",
    margin  : "5px",
    maxWidth :  "300px",
    width  : "250px",
    transition: 'all 2s',
    transform : 'translateX(200%)'

    
    
})
    // let style = {
    //     // border : '1px solid #000',
    //     borderRadius  : "10px",
    //     // padding : "10px",
    //     margin  : "5px",
    //     maxWidth :  "300px",
    //     width  : "250px",
    //     transition: 'all 3s',
    //     transform : 'translateX(200%)'

        
        
    // }

    useEffect(()=>{
      let myTimeout2 ;
     const myTimeout= setTimeout(()=>{
        setStyle({...style , transform : 'translateX(0%)' })
        console.log("xc")

        myTimeout2 =  setTimeout(()=>{
          console.log(setStyle)

          setStyle({...style , transform : 'translateX(200%)' })

        },4000)
        clearTimeout(myTimeout)
      },100)
      return ()=> {
        clearTimeout(myTimeout2)
      }
    },[])
  return (
    <div  onClick={onClose}  style={style} >{ CustomView ? <CustomView message={message} onClose={onClose}
    // style={}
    mode={mode}
    /> : message }</div>
  )
}
