import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import userContext from "../utils/userContext"

export default function LoginorSignup() {

    const [signup, setsignup] = useState(false)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmpassword, setConfirmPassword] = useState(null)


    const { user, setUser } = useContext(userContext)
    console.log(user)

    function showAlert() {
        console.log("inside showalert")
        window.alert("Invalid/no credentials")
    }

    return (
        <>
            <div className="shadow-2xl flex flex-col max-h-fit p-10 w-96 m-auto mt-40">
                {signup ? <h1 className="text-2xl">Sign Up </h1> : <h1 className="text-2xl"> Login </h1>}
                <h1 className="mt-5">Username : </h1>
                <input onChange={(e) => setUsername(e.target.value)} className="border px-3 rounded-md w-64 h-12" />
                <h1 className="mt-5">Password : </h1>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="border px-3 w-64 rounded-md h-12" />
                {signup &&
                    <div>
                        <h1 className="mt-5">Re-Enter Password : </h1>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="border px-3 w-64 rounded-md h-12" />
                    </div>}

                {/* if signup is true then check if username and password is 
                    not null. If not then setUser and redirect to home. If not then 
                    alert.
                    if signup is false then check if cred is not null and  pass and confirmpass
                    is equal. If yes then redirect and set user cred, if not then alert
                
                */}
                {!signup ?
                 (username && password) != null ? 
                 <Link to="/"><button onClick={() => setUser({
                    username: username,
                    password: password,
                    loggedIn:true
                })} className="w-24 h-10 rounded-md text-white bg-orange-400 my-5">Login</button></Link> 
                : <button onClick={showAlert} className="w-24 h-10 rounded-md text-white bg-orange-400 my-5">Login</button> 
                : (((username && password && confirmpassword) != null) && (confirmpassword == password)) 
                ? <button onClick={() => setUser({
                        username: username,
                        password: password,
                        loggedIn:true
                    })} className="w-24 h-10 text-white rounded-md bg-orange-400 my-5"><Link to="/">Signup</Link></button>
                 : <button onClick={showAlert} className="w-24 h-10 text-white rounded-md bg-orange-400 my-5">Signup</button>}

                 
                <div className="flex ">
                    {signup ? <p className="mr-3">Already have an account? </p> : <p className="mr-3">No account? </p>}
                    {signup ? <button onClick={() => setsignup(false)} className="underline text-blue-600">Log In!</button> : <button onClick={() => setsignup(true)} className="underline text-blue-600">sign up!</button>}
                </div>
               <p className="underline text-blue-600 text-sm  mt-14"> <Link to="/">Back to home page</Link></p>
            </div>
        </>
    )
}

