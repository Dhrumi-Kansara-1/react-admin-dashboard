import {
  faCartShopping,
  faMoneyCheckDollar,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Widget from "../components/Other/Widget";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import FeaturedChart from "../components/Other/FeaturedChart";
import Chart from "../components/Other/Chart";
import Table from "../components/Other/Table";

function Home() {
  const iconColor=[
    {key:'red', },
    {key:'yellow' },
    {key:'green' },
    {key:'purple'}
  ]
 
  let widgets = [
    {
      title: "USERS",
      value: 233,
      link: "See all Orders",
      icon: faUser,
      isMoney: false,
      percent: 30,
    },
    {
      title: "Orders",
      value: 109,
      link: "See all Orders",
      icon: faCartShopping,
      isMoney: false,
      percent: -1,
    },
    {
      title: "Eranings",
      value: 100,
      link: "View Net Earnings",
      icon: faSackDollar,
      isMoney: true,
      percent: -70,
    },
    {
      title: "Balance",
      value: 270,
      link: "See details",
      icon: faMoneyCheckDollar,
      isMoney: true,
      percent: -70,
    },
  ];
  
  return (
    <div className="flex w-full">
      <Sidebar />

      {/* home container */}
      <div className="flex-[7]">
        <Navbar />
        {/* widgets */}
        <div className="flex gap-5 p-5">
          {widgets.map((item, index) => {
            let colorI=index//4
            return (
              <Widget
                key={index}
                widget={{ ...item, iconColor: iconColor[colorI].key }}
              />
            );
          })}
        </div>
        {/* end of widgets */}
        {/* charts */}
        <div className="flex gap-5 px-5 py-1">
          <FeaturedChart />
          <Chart />
        </div>
        {/* end of charts */}
        <div id="listContainer"  className="shadow-md p-5 m-5">
          <h2 id="listTitle" className="font-medium text-gray-500 mb-4 ">Latest Transactions</h2>
          <div id="list" className="">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
