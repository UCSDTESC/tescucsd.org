import { NavLink } from "react-router-dom";
import TescLogoWhite from "/AllPages/TESC-logo-white.png";
import eventsPageImage from "/AllPages/events-page-image.png";
import useImagePreloader from "../Hooks/useImagePreload";
// import "./navbar.css";
// const NavBar = () => {
//   const pages = (
//     <ul className="navbar-nav ms-auto mb-0">
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/about-us">
//           <span className="nav-text">About Us </span>
//         </NavLink>
//       </li>
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/events">
//           <span className="nav-text">Events</span>
//         </NavLink>
//       </li>
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/council-members">
//           <span className="nav-text">Council Members</span>
//         </NavLink>
//       </li>
//     </ul>
//   );
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-custom">
//         <div className="container-fluid d-flex align-items-center">
//           <NavLink to="/">
//             <img className="nav__logo" src={TescLogoWhite} alt="" />
//           </NavLink>

//           <div className="collapse navbar-collapse" id="navbarText">
//             {pages}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
const NavBar = () => {
  return (
    <div className="w-full bg-navy flex justify-between px-[18px] py-1">
      <NavLink to="/">
        <img className="h-[80px]" src={TescLogoWhite} alt="" />
      </NavLink>
      <div className="flex items-center">
        <NavLink
          className="h-min mx-[32px]"
          to="https://tesc.typeform.com/to/hlC07HII"
        >
          <span className="text-offWhite text-[26px] font-medium">Join Us</span>
        </NavLink>
        <NavLink className="h-min mx-[32px]" to="/about-us">
          <span className="text-offWhite text-[26px] font-medium">
            About Us{" "}
          </span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/events">
          <span className="text-offWhite text-[26px] font-medium">Events</span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/council-members">
          <span className="text-offWhite text-[26px] font-medium">
            Council Members
          </span>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
