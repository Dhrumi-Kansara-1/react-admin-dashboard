import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Widget({widget}) {
  console.log(widget.iconColor)
  function getIconStyle(color) {
    switch(color) { 
    case 'red':
      return "bg-red-200 text-red-600"
    case'yellow':
      return "bg-yellow-200 text-yellow-600"
    case 'green':
      return "bg-green-200 text-green-600"
    default: 
      return "bg-purple-200 text-purple-600" 
    }
  }
  return (
    <div className="flex flex-1 p-3 justify-between shadow-md rounded-lg min-h-24">
      {/* left */}
      <div className="flex flex-col justify-between gap-2">
        {/* title */}
        <span className="uppercase font-bold text-sm text-gray-500">{widget.title}</span>
        {/* counter */}
        <span className="text-2xl font-light">{widget.isMoney && "$"}{widget.value}</span>
        {/* link */}
        <span className="text-xs border-b border-gray-300 cursor-pointer hover:text-purple-800 hover:border-purple-800">{widget.link}</span>
      </div>
      {/* end of left */}

      {/* right */}
      <div className="flex flex-col justify-between">
        {/* percentage */}
        <div className={`flex gap-1 items-center text-sm  font-semibold ${widget.percent>0?'text-green-600':'text-red-600'}`}> 
          <FontAwesomeIcon icon={widget.percent>0?faChevronUp:faChevronDown} />
           <span>{widget.percent}%</span>
        </div>
        {/* icon */}
        <FontAwesomeIcon icon={widget.icon} className={`text-lg bg-red-200 ${getIconStyle(widget.iconColor)}  self-end p-1 rounded`}/>
      </div>
      {/* end of right */}
    </div>
  );
}

export default Widget;
