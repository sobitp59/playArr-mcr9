import { BiSearch } from "react-icons/bi";
import { useVideoData } from "../../context/VideoContext";
import "./searchBar.css";

const SearchBar = () => {
    const {getSearchQuery, searchQuery} = useVideoData();
  return (
    <div className="searchbar">
        <BiSearch className="searchBar__icon"/>
        <input onChange={getSearchQuery} value={searchQuery} className="searchBar__input" type="search" placeholder="search videos here..."/>
    </div>
  )
}

export default SearchBar