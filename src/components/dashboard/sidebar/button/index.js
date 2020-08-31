import React from 'react';
import { useLocation } from 'react-router-dom';

function SidebarButton(props) {
  const location = useLocation();
  
  return (
    <div 
    className={ 
      location.pathname.replace('/', '') === props.title.toLowerCase() ? 'dashboard-sidebar__action-active' : 'dashboard-sidebar__action' 
    }>
      <i className={"icon " + props.faIcon}></i>
      {props.title}
    </div>
  )
}

export default SidebarButton;
