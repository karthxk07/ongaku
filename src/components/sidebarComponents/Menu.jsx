import { useState } from "react";
import {
  AiFillHome,
  AiFillDatabase,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePlusSquare,
  AiOutlineSetting,
  AiFillMessage,
} from "react-icons/ai";

export const Menu = () => {
  let [activeIndex, setactiveIndex] = useState(0);
  let menuItems = [
    [AiFillHome, "Home"],
    [AiOutlineSearch, "Discover"],
    [AiFillMessage, "Messages"],
    [AiFillDatabase, "Library"],
    [AiOutlinePlusSquare, "Share"],
    [AiOutlineUser, "Profile"],
    [AiOutlineSetting, "Settings"],
  ];
  return (
    <>
      <div
        className="Menu flex-1 m-auto w-10/12 p-4 my-auto  rounded-lg font-sans text-md text-stone-400 "
        style={{ boxShadow: "inset 2px 2px 5px 0px rgb(0 0 0/0.5)" }}
      >
        <ul className="flex-col">
          {menuItems.map((Item, Index) => {
            let ItemTag = Item[0];
            return (
              <>
                <div>
                  {(Index === 2) | (Index === 6) ? (
                    <hr className="my-5 rounded-xl opacity-20 text-stone-600 shadow-2xl shadow-stone-400"></hr>
                  ) : null}
                </div>
                <li
                  className={`group flex shadow-inner ${
                    Index === activeIndex ? "text-stone-100" : ""
                  } p-2 rounded-2xl duration-300 ease-in-out   text-left content-center my-1 cursor-pointer hover:text-stone-200`}
                  onClick={() => {
                    setactiveIndex(Index);
                    Item[1] === "Home"
                      ? (window.location.href = `/ongaku`)
                      : (window.location.href = `/ongaku/${Item[1]}`);
                  }}
                >
                  <ItemTag className="my-auto mr-5 group-hover:scale-110" />
                  {Item[1]}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
