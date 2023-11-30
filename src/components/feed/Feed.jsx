import "./feed.css"
import Post from "../post/Post";
import Share from "../share/Share";
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = username ? await axios.get(`/api/posts/profile/${username}`) : await axios.get("/api/posts/timeline/654f1ab69ffc541672d9acd0")
      setPosts(res.data)
    }
    fetchPosts()
  },[])

    return (
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    );
  }