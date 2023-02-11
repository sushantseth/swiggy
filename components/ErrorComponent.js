import { useRouteError } from "react-router-dom"

export default function ErrorComponent(){
    const {status, statusText} = useRouteError()
    return(
        <>
        <h1>{status} !!</h1>
        <h3>{statusText}</h3>

        </>
    )
}