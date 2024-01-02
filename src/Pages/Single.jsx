import React from "react"
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import Datatable from "../components/Other/Datatable"
import Chart from "../components/Other/Chart"

function Single() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div id="container" className="flex-[6]">
        <Navbar />
        <div id="singleComponents" className="p-5 flex flex-col ">
          <div id="top" className="flex flex-row gap-5  h-1/4">
            <div id="left" className="flex-[1]">
              <div id="info" className="flex flex-col gap-5   shadow-md p-5">
                <div
                  id="infoHeader"
                  className="flex  justify-between items-center"
                >
                  <p className="text-gray-500">Information</p>
                  <button className="text-purple-800 text-xs bg-purple-200 py-1 px-2 rounded  hover:bg-black">
                    Edit
                  </button>
                </div>
                <div
                  id="infoBody"
                  className="flex flex-row justify-between gap-3 "
                >
                  <img
                    src={
                      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div id="infoContent" className="flex flex-col gap-2">
                    <h2 id="title " className="font-semibold text-xl">Jane Doe</h2>
                    <p id="detail" className="text-gray-700 text-sm">Email: janedoe@email.com</p>
                    <p id="detail" className="text-gray-700 text-sm">Phone: +1 78906 43217</p>
                    <p id="detail" className="text-gray-700 text-sm">
                      Address: Temp Dom St, 323 Garder vs. New York
                    </p>
                    <p id="detail" className="text-gray-700 text-sm">Country: USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="right" className="flex-[2]">
              <Chart />
            </div>
          </div>
          <div id="bottom" className="h-3/4 ">
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single
