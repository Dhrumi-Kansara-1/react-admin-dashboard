import {
  faBell,
  faChartLine,
  faClipboard,
  faCreditCard,
  faGear,
  faHouseMedical,
  faIdCard,
  faRightFromBracket,
  faShop,
  faSquarePollHorizontal,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let navLinks = [
  {
    name: "Main",
    links: [
      {
        label: "dashboard",
        icon: faSquarePollHorizontal,
      },
    ],
  },
  {
    name: "List",
    links: [
      {
        label: "Users",
        icon: faUser,
      },
      {
        label: "Products",
        icon: faShop,
      },
      {
        label: "Orders",
        icon: faCreditCard,
      },
      {
        label: "Delivery",
        icon: faTruck,
      },
    ],
  },
  {
    name: "Usefull",
    links: [
      {
        label: "Stats",
        icon: faChartLine,
      },
      {
        label: "Notification",
        icon: faBell,
      },
    ],
  },
  {
    name: "Service",
    links: [
      {
        label: "System Health",
        icon: faHouseMedical,
      },
      {
        label: "Logs",
        icon: faClipboard,
      },
      {
        label: "Settings",
        icon: faGear,
      },
    ],
  },
  {
    name: "User",
    links: [
      {
        label: "Profile",
        icon: faIdCard,
      },
      {
        label: "Logout",
        icon: faRightFromBracket,
      },
    ],
  },
];

const mode = [
  "light",
  "dark"
]

function Sidebar() {
  return (
    <div className="flex-[1] border-r min-h-screen bg-white">
      {/* top */}
      <div className="h-12 flex items-center justify-center mb-1.5">
        {/* logo */}
        <span className="text-xl font-bold text-purple-800 ">admin</span>
      </div>
      {/* top end */}
      <hr />
      {/* middle  */}
      <div className="pl-3">
        {/* list */} 
        {navLinks.map((item, index) => {
          return (
            <div key={index}>
              <p className="text-xs text-gray-700 uppercase font-bold mt-3 mb-1">{item.name}</p>
              <ul>
                {item.links.map((link, index) => {
                  return (
                    <li key={index} className="flex gap-2 items-center p-1  text-sm cursor-pointer hover:bg-purple-100">
                      <FontAwesomeIcon icon={link.icon} className="text-purple-800 "/>
                      <span className="font-semibold text-gray-500">{link.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* bootom */}
      <div className="flex m-3 gap-2">
        {/* color option */}
        {mode.map((item, index)=>{
          return (<div className={`h-5 w-5 rounded border border-purple-800 cursor-pointer ${item==="light"?'bg-slate-100':'bg-slate-950'}`}></div>)
        })}
        <div></div>
      </div>
    </div>
  );
}

export default Sidebar;
