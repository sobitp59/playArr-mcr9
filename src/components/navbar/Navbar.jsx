import { CgPlayList } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { MdExplore, MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink className="navbar__link" to={"/"}><GoHomeFill />  home</NavLink>
        <NavLink className="navbar__link" to={"/explore"}><MdExplore/> explore </NavLink>
        <NavLink className="navbar__link" to={"/playlist"}><CgPlayList/> playlist</NavLink>
        <NavLink className="navbar__link" to={"/watchlater"}><MdWatchLater/> watch later</NavLink>
    </div>
  )
}

export default Navbar