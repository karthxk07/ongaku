import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <>
      <form className="flex mt-6 m-auto mb-4 w-10/12 rounded-2xl  ease-in-out duration-300 focus-within:shadow-white focus-within:shadow-md shadow-lg py-2 px-3 text-md text-slate-200 ">
        <input
          type="text"
          className=" flex-1 placeholder:text-stone-500 outline-none focus:outline-none  hover:placeholder:text-slate-200 focus:placeholder:text-slate-200 placeholder:duration-300 bg-transparent caret-slate-300 text-slate-200"
          placeholder={`Search`}
        ></input>
        <AiOutlineSearch className="my-auto cursor-pointer" />
      </form>
    </>
  );
};
