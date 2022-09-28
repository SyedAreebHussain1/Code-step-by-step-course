import React from "react";
import './custom.css'
function Style(props){
    console.log('props=>',props)
    const h2 = { 
        color:'green',
        fontSize:'36px',
        textAlign: 'center'
    }
    const h3 = { 
        color:'red',
        fontSize:'24px',
        textAlign: 'center'
    }

    return(
        <div>
            <h1 className="header">React Style</h1>
            <h1 className={props.data == 'apply'? 'header':'header1'}>React Style</h1>

            <h2 style={h2}>React Inline Style</h2>
            <h2 style={props.data == 'apply'?h2:h3}>React coniditional styling</h2>
        </div>
    )
}
export default Style