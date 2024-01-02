import React from "react" 
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import Datatable from "../components/Other/Datatable"

function List() {
  return (
    <div id="list" className="flex w-full"> 
      <Sidebar /> 
      {/* home container */}
      <div className="flex-[7]">
        <Navbar />
        <Datatable action={true}/>
      </div>
     </div>
  )
}

export default List
