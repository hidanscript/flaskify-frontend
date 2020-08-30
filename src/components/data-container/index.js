import React from 'react';

function DataContainer(props) {
  return (
    <div className="text-data-container">
      <span className="text-white text-data">{props.percentage}%</span>
      <span className="text-white text-data-subtitle">
       {props.description}
      </span>
    </div>
  )
}

export default DataContainer;
