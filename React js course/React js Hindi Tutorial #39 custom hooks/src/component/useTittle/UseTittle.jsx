import React,{useEffect} from 'react'

function UseTittle(props) {
    useEffect(()=>{
        document.title =`${props}  hits on button`
      })
}

export default UseTittle