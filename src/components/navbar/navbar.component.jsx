import { NavLink } from "react-router-dom";
import { useUserGlobalContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase";
const Navbar = () => {
  const { currentUser } = useUserGlobalContext();
  const signOutHandler = async () => {
    const res = await userSignOut();
  };
  return (
    <>
      <nav className="m-[1rem] mx-[5rem] flex items-center justify-between">
        <div className="w-[15%] h-[10%] object-contain ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS989GRiByc43QI2Wn6Ci3r7oarr-aGcZkoFA&usqp=CAU"
            alt="logo"
          />
        </div>
        <ul>
          <li className="flex gap-8 font-bold text-[18px]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-red-600 " : "text-blue-600 "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-red-600 " : "text-blue-600 "
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive ? "text-red-600 " : "text-blue-600 "
              }
            >
              List
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-red-600 " : "text-blue-600 "
              }
            >
              Cart
            </NavLink>
            {currentUser ? (
              <span onClick={signOutHandler} className="cursor-pointer ">
                Sign Out
              </span>
            ) : (
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  isActive ? "text-red-600 " : "text-blue-600 "
                }
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export { Navbar };
