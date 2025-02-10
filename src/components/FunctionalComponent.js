import React from 'react'
import './Styles.css'
function FunctionComponent(props){
    console.log(props)
    let applyStyle = props.apply ? 'heading':' '
    let inlineStyle ={
        color:'green',
        backgroundColor: 'red',
        fontSize:'50px'
    }
  return(
    <div>
        <h1 class={${applyStyle}>Welcome to my React class {props</h1>}
    </div>
  )
}