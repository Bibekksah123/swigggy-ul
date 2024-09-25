import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpBuoy } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SiCarto } from "react-icons/si";
function Header() {
  const [toggle, settoggle] = useState(false);
  const arritemlsit = [
    {
      icon: <IoSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offer",
      sup: "New",
    },
    {
      icon: <IoMdHelpBuoy />,
      name: "Help",
    },
    {
      icon:<CgProfile />,
      name: "Sing in",
    },
    {
      icon:<SiCarto />,
      name: "Cart",
      sup:(2)
    },
  ];
  return (
    <>
      <div
        className="over-lay w-full h-full fixed duration-500  "
        onClick={() => settoggle(false)}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>
      <div
        className="w-[300px] h-full bg-[#fff] absolute duration-[600ms]"
        style={{
          left: toggle ? "0%" : "-100%",
        }}
      ></div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] m-auto  flex items-center">
          <div className="w-[80px]">
            <img
              className="w-full"
              src="https://th.bing.com/th/id/OIP.7y16jgRmFxYcjnNkEfqRQgAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black ">
              {" "}
              Ratanada
            </span>{" "}
            Jodhpur Rajashtan,india{" "}
            <RxCaretDown
              onClick={() => settoggle(true)}
              className=" cursor-pointer inline text-[25px] text-yellow-500"
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto font-bold text-[18px]">
            {arritemlsit.map((item,index) => (
              <li key={index} className="flex items-center gap-[3px] hover:text-yellow-500">
                {item.icon}
                {item.name}
                <sup className="text-red-600">{item.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
