// import { useEffect, useRef, useState } from "react";
// import { FaChevronDown, FaUser } from "react-icons/fa";
// import {
//   RiGitRepositoryPrivateFill,
//   RiLogoutCircleLine,
//   RiMenuAddLine,
//   RiSettings2Line,
// } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
// import {
//   emptySessionStorage,
//   getFromSessionStorage,
// } from "../../shared/browserStorage";
// import { signOut } from "../../store/slices/adminSlice";
// import Logo from "/img/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { LiaBell } from "react-icons/lia";
import { FaFire } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const Header = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const currentUser = getFromSessionStorage("a_u_d");
//   const { currentAdminUser }: any = useAppSelector((state) => state.admin);
//   const [isDropDown, setIsDropDown] = useState(false);
//   const styles = {
//     menuItems: `flex gap-3 py-3 transition justify-center text-lg px-3 mb-1 rounded-md items-center menuItem_text cursor-pointer hover:bg-text-[#fff] hover:text-[#fff]`,
//     dropMenu: `flex gap-3 items-center px-3 py-4 transition cursor-pointer hover:bg-gray-100 overflow-hidden`,
//   };
//   const user = JSON.parse(localStorage.getItem('user') as string)
//   const dropDownRef = useRef<any>(null);
//   const signout = async () => {
//     await dispatch(signOut());
//     emptySessionStorage();
//     localStorage.clear()
//     navigate("/");
//   };

//   useEffect(() => {
//     const dropDownEffectClick = (e: any) => {
//       if (
//         dropDownRef.current !== null &&
//         !dropDownRef.current.contains(e.target)
//       ) {
//         setIsDropDown(!isDropDown);
//       }
//     };
//     if (isDropDown) {
//       window.addEventListener("click", dropDownEffectClick);
//     }
//     return () => {
//       window.removeEventListener("click", dropDownEffectClick);
//     };
//   }, [isDropDown]);
  return (
    <>
     <div className="flex justify-between pb-6">
        <div className=" ">
            <h1 className="font-semibold text-2xl">Good Morning, Eureka</h1>
            <p className=" font-medium text-gray-500 text-sm my-2">Today { new Date().toLocaleString() }</p>
        </div>

        <div className="flex items-start ">
            <div className=" flex items-center gap-2">

        <IoMdSearch size={24} color="gray" />
        <LiaBell size={24} color="gray" />
            <div className="flex items-center bg-white p-2 rounded-xl gap-2">
            <div className="flex items-center gap-1">
            <IoPersonCircle size={20} />
            <p>Eureka</p>
            </div>
            <div className=" border-gray-500 border h-4" />
            <div className="flex items-center gap-1">
            <FaFire color="orange" />
            <p>230</p>
            </div>
            </div>
            </div>
        </div>
     </div>
    </>
  );
};
export default Header;
