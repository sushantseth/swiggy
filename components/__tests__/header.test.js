import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server" //this router can work without browser

test("logo should load on rendering header", ()=>{
    //load header

  const header =   render( 
    <StaticRouter>
  <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>)
 
  //testing the logo
  const logo = header.getAllByTestId("logo")


  expect(logo[0].src).toBe("https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png")

  
})

test("cart item should have 0 item on rendering", ()=>{
    //load header

  const header =   render( 
    <StaticRouter>
  <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>)

  //testing the logo
  const cart = header.getAllByTestId("cart")

  // console.log(cart[0].innerHTML)

    expect(cart[0].innerHTML).toBe("0<svg class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mr-2 mb-1 css-ptiqhd-MuiSvgIcon-root\" focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"ShoppingCartIcon\"><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></svg>Cart")

  
}) 

