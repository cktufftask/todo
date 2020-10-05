import React from 'react'

const Menu=(props)=> {
    let   menuList= props.tab.map((it, index)=> <li key={index+'btn'} className={ it.status+' tab-item slide-up-fade-in'} onClick={(e,x)=>props.activeHandler(e,it.tab)}>{it.tab}</li>);
  
    return (
        <>
           { menuList}
        </>
    )
}
export default  Menu;
