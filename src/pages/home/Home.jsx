import Topbar from "../../../src/components/topbar/Topbar";
import Sidebar from "../../../src/components/sidebar/Sidebar";
import Feed from "../../../src/components/feed/Feed";
import Rightbar from "../../../src/components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}