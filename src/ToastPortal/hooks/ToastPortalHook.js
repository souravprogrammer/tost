import React , {useEffect , useState} from "react"
import { uuidv4 } from "../uniqueId"
 export const  useToastPortal =()=>{
    const [loaded , setLoaded]  = useState(false)
    const [portalid] = useState(`${uuidv4()}`)
    useEffect (()=>{

   const div = document.createElement("div")
   div.id = portalid
   div.style =  `position: fixed; top: 10px;  right: 10px;`
   document.getElementsByTagName("body")[0].prepend(div)

   setLoaded(true)
   return ()=> {   document.getElementsByTagName("body")[0].removeChild(div)  }
   },[portalid])

   return {loaded , id : portalid }
}