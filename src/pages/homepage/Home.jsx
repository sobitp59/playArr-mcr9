import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";



const Home = () => {
  return (
    <div className="home">
            <Outlet />
    </div>
  )
}

export default Home