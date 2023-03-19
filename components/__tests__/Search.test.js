import {toBeInTheDocument} from "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import Home from "../home"
import { HOME_DATA } from "../../mocks/Homedata"
import { Search } from "@mui/icons-material";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(HOME_DATA)
    })
})


test("Search results on homepage", async()=>{

    const body = render(
    <StaticRouter>
    <Provider store={store}> 
    <Home /> 
    </Provider>
    </StaticRouter>)

    await waitFor(()=> expect(body.getByTestId("restList")))
    let restList = body.getByTestId("restList")
    expect(restList.children.length).toBe(1)

    // console.log(body)
    let input = body.getByTestId("input")
    // console.log(input)
    let shimmer = body.getByTestId("shimmer")
    // console.log(shimmer)
        
    expect(shimmer.children.length).toBe(15)
    expect(input.placeholder).toBe("Try pizza..")

})

test("Search for string food on homepage", async()=>{

    const body = render(
    <StaticRouter>
    <Provider store={store}> 
    <Home /> 
    </Provider>
    </StaticRouter>)

    let searchbtn = body.getByTestId("search-btn")
    let input = body.getByTestId("input")
    fireEvent.change(input,{target : {
        value:"food "
    }})
    
    fireEvent.click(searchbtn)
    let restList = body.getByTestId("restList")
    expect(restList.children.length).toBe(1)
})