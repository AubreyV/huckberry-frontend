import React from 'react';

function NavLink(props) {
  return (
    <div 
      className={"nav-item" + (props.active ? " active" : "")}
      onMouseEnter={() => props.mouseListener(props.index) }
      onMouseLeave={() => props.mouseListener(props.index) }
    >
      <a>{ props.title }</a>
    </div>
  )
}

export default NavLink;