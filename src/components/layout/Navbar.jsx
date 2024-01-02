import {
  faBed,
  faBell,
  faExpand,
  faGlobe,
  faLanguage,
  faList,
  faMagnifyingGlass,
  faMessage,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  {
    icon: faGlobe,
    label: "English",
  },
  {
    icon: faMoon,
  },
  {
    icon: faExpand,
  },
  {
    icon: faBell,
    counter: 1,
  },
  {
    icon: faMessage,
    counter: 2,
  },
  {
    icon: faList,
  },
  {
    img: "https://images.pexels.com/photos/18903723/pexels-photo-18903723/free-photo-of-girl-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


  
function Navbar() {
 

  return (
    <div className="h-14 border-b flex items-center text-sm text-gray-800">
      {/* wrapper */}
      <div className="flex items-center p-5 justify-between w-full">
        {/* search */}
        <div className="flex border border-gray-300 rounded-lg items-center p-2">
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none bg-transparent text-sm"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        {/* end of search */}
        {/* items */}
        <div className="flex  gap-5">
          {items.map((item, index) => {
            return (
              /* item */
              <div key={index} className="flex items-center gap-1 relative">
                {item.icon && <FontAwesomeIcon icon={item.icon} className="text-xl " />}
                {item.counter && <div className="w-4 h-4 bg-red-500 rounded-full text-white flex items-start justify-center text-xs absolute top-0 left-0 ml-2">{item.counter}</div>}
                {item.label && <span>{item.label}</span>}
                {item.img && <img src={item.img} className="w-8 h-8 rounded-full"/>}
              </div>
              /* end of item */ 
            );
          })}
        </div>
        {/* end of items */}
      </div>
    </div>
  );
}

export default Navbar;
