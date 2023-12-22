import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export default function Topbar() {

  const { user, dispatch } = useContext(AuthContext);
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);

    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

    history.push("/login");
  };

  const cancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="topbarContainer">
      <div className={`overlay ${isLogoutModalOpen ? "showOverlay" : ""}`}/>
      <div className="topbarLeft">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">SocialFeeds</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
            <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarLogout">
          <span className="logoutLink" onClick={handleLogout}>Logout</span>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/person/noAvatar.png"
            } alt="" className="topbarImg"/>
        </Link>
      </div>
      {isLogoutModalOpen && (
        <div className="logoutModal">
          <div className="logoutModalContent">
            <p>Are you sure you want to logout?</p>
            <div>
              <button onClick={confirmLogout}>Yes</button>
              <button onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}