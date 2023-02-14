import { createContext } from "react";


const userContext = createContext(
  {
    username : "",
    password : "",
    loggedIn:false
})

export default userContext