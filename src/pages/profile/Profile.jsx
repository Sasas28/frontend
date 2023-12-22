import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PasswordModal from "../../components/passwordModal/PasswordModal";


export default function Profile() {

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER
  const { user: currentUser } = useContext(AuthContext)
  const [user,setUser] = useState({})
  const username = useParams().username
  
  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`/api/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  },[username])

  const isCurrentUser = currentUser && currentUser.username === user.username;
  const handlePasswordUpdate = async (newPassword) => {
    try {
      // Make a request to update the password in the backend
      await axios.put(`/api/users/${currentUser._id}`, {
        userId: currentUser._id,
        password: newPassword,
      });
      // Display an alert message
      alert('Your password has been changed');
    } catch (error) {
      console.error('Error updating password:', error);
      // Handle error if needed
    }
  };

    return (
      <>
      <div className={`overlay ${showPasswordModal ? "showOverlay" : ""}`}/>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "/person/noCover.png"
                  }
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "/person/noAvatar.png"
                  }
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
                  {isCurrentUser && <button className="editBtn" onClick={()=>{setShowPasswordModal(true)}}>Edit Profile</button>}
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={username}/>
              <Rightbar user={user}/>
            </div>
          </div>
        </div>
        {showPasswordModal && (
          <PasswordModal
            closeModal={() => setShowPasswordModal(false)}
            updatePassword={handlePasswordUpdate}
          />
        )}
      </>
    );
  }