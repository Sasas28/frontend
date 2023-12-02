import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
  user:{
  _id:"654f1b5b9ffc541672d9acd2",
  username:"Dingdong",
  email:"dingdong@gmail.com","password":"$2b$10$M9O1S8Z5t3y9fB7hnZspWORBtonWVbRLjP7sk5a/jj2WuvOAnT2Ou",
  profilePicture:"/person/5.jpeg",
  coverPicture:"/person/coverImg2.jpeg",
  followers:["654f1ab69ffc541672d9acd0"],
  followings:["654f1b839ffc541672d9acd4"],
  isAdmin:false,
  createdAt:{"$date":{"$numberLong":"1699683163067"}},
  updatedAt:{"$date":{"$numberLong":"1700818367667"}},
  __v:{"$numberInt":"0"},
  city:"Mandaluyong",
  from:"Philippines",
  relationship:{"$numberInt":"1"},
  desc:"I love Marian"},
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </AuthContext.Provider>
    );
}