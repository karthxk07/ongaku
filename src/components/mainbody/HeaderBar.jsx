import { AiOutlineCaretDown } from "react-icons/ai";
import { authenticated, userDetails } from "../authentication/authenticated";

export const HeaderBar = () => {
  var imageUrl;
  authenticated
    ? (imageUrl = userDetails.userImageurl)
    : (imageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeWuq1WuGP3ulNgFDpYAmYvdgjiJmXNk3Ig&usqp=CAU");
  return (
    <div className="flex flex-row p-2 mb-3">
      <p className="flex-1 text-4xl font-sans text-white mx-2">Welcome.</p>
      <img
        className=" h-9 w-9 m-auto rounded-full"
        src={`${imageUrl}`}
        alt="userImage"
      ></img>
      <AiOutlineCaretDown className="my-auto mx-1" />
    </div>
  );
};
