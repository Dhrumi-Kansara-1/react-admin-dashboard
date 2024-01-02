import React from "react"
const data = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
]
let rows = data.map((obj) => Object.values(obj))
const columns = Object.keys(data[0])

function Table() {
  function getStatusStyle(status) {
    switch (status) {
      case "Abort":
        return "bg-red-100 text-red-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      case "Approved":
        return "bg-green-100 text-green-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div id="table">
      <div class="relative overflow-x-auto   sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((item, index) => {
                return (
                  item !== "img" && (
                    <th scope="col" class="px-6 py-3" key={index}>
                      {item}
                    </th>
                  )
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">{item.id}</td>
                  <td class="px-6 py-4">
                    <div id="cellWrapper" className="flex items-center gap-2">
                      <img src={item.img} className="w-6  object-cover" />
                      {item.product}
                    </div>
                  </td>

                  <td class="px-6 py-4">{item.customer}</td>
                  <td class="px-6 py-4">{item.date}</td>
                  <td class="px-6 py-4">{item.amount}</td>
                  <td class="px-6 py-4">{item.method}</td>
                  <td class="px-6 py-4">
                    <span id={`status`} className={`py-1 px-2 rounded text-xs font-bold ${getStatusStyle(item.status)} `}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
