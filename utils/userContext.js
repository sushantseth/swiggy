import { createContext } from "react";


const userContext = createContext(
  {
    username : "",
    password : ""
})

export default userContext