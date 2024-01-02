import {
  faChevronDown,
  faChevronUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function FeaturedChart() {
  let items = [
    { label: "Target", value: 12.2 },
    { label: "Target", value: -12.2 },
    { label: "Target", value: 12.2 },
  ]
  return (
    <div className="basis-2/6 shadow-md p-3">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500">
        {/* title */}
        <h2 className="text-base font-medium">Total Revenue</h2>
        {/* icon */}
        <FontAwesomeIcon icon={faEllipsisVertical} className="text-base" />
      </div>
      {/* end of top */}
      {/* bottom */}
      <div className="p-5 flex gap-3 flex-col items-center justify-center">
        {/* progress bar */}
        <CircularProgressbar
          value={70}
          text="70%"
          strokeWidth={5}
          className="w-28 h-28"
        />
        {/* title */}
        <p className="font-medium text-gray-500">Total sales made today</p>
        {/* amount */}
        <p className="text-3xl">$420</p>
        {/* description */}
        <p className="font-light text-gray-500 text-xs text-center">
          Previous transaction processing. Last payments may not be included
        </p>
        {/* summary */}
        <div id="summary" className="flex justify-between items-center w-full">
          {/* item */}
          {items.map((item, index) => {
            return (
              <div id="item" className="text-center" key={index}>
                {/* item title */}
                <div id="itemTitle" className="text-sm text-gray-500">
                  {item.label}
                </div>
                {/* item result */}
                <div
                  id="itemResult"
                  className="flex items-center text-sm gap-1 mt-2"
                >
                  <FontAwesomeIcon
                    id="resultIcon"
                    icon={item.value > 0 ? faChevronUp : faChevronDown}
                    className={`${
                      item.value > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  />
                  <p id="resultAmount">${item.value}k</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* end of bottom */}
    </div>
  )
}

export default FeaturedChart
