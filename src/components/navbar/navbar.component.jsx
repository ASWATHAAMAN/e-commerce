import { Link } from "react-router-dom";
import { useUserGlobalContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase";
const Navbar = () => {
  const { currentUser } = useUserGlobalContext();
  const signOutHandler = async()=>{
     const res = await userSignOut()
  }
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
            <Link to="/home">Home</Link>
            <Link to="/cart">Cart</Link>
            {currentUser ? (
              <span onClick={signOutHandler}>Sign Out</span>
            ) : (
              <Link to="/signIn">Sign In</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export { Navbar };
