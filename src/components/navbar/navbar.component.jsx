import { NavLink } from "react-router-dom";
import { useUserGlobalContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const { currentUser } = useUserGlobalContext();
  const signOutHandler = async () => {
    const res = await userSignOut();
  };
  return (
    <>
      <nav className=" mb-[1.5rem] px-[5rem] py-[1rem] flex items-center justify-between shadow-xl fixed bg-white w-[100%] mx-auto mt-[-6rem]">
        <div className="w-[15%] h-[10%] object-contain ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS989GRiByc43QI2Wn6Ci3r7oarr-aGcZkoFA&usqp=CAU"
            alt="logo"
          />
        </div>
        <ul>
          <li className="flex items-center gap-8 font-bold text-[18px]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-red-600 " : "text-blue-600 "
              }
            >
              Home
            </NavLink>
            <div className="flex items-center gap-2 cursor-pointer">
              <BsHandbag />
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-red-600 " : "text-blue-600 "
                }
              >
                Shop
              </NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-red-700  ">
              <CiHeart />
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive ? "text-red-600 " : "text-blue-600 "
                }
              >
                List
              </NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <GrCart />
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-red-600 " : "text-blue-600 "
                }
              >
                Cart
              </NavLink>
            </div>
            {currentUser ? (
              <span onClick={signOutHandler} className="cursor-pointer ">
                Sign Out
              </span>
            ) : (
              <div className="flex items-center gap-2 cursor-pointer hover:border-2 hover:border-blue-400 px-[10px] py-[0.25rem] rounded-lg  hover:text-white hover:bg-blue-400">
                <FaRegCircleUser />
                <NavLink
                  to="/signIn"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600"
                      : "text-blue-600  hover:text-white"
                  }
                >
                  Sign In
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export { Navbar };
