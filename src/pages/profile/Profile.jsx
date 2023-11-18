import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile() {
    return (
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="/post/8.jpeg"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="/person/1.jpeg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Ajaster Zamora</h4>
                  <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
        </div>
      </>
    );
  }