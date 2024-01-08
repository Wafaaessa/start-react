import React, { Component } from 'react';
import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Component/RootLayout/RootLayout';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';


let routers= createBrowserRouter([
    {path:'/',element:<RootLayout/>, children:[
        {index:true ,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'portfolio',element:<Portfolio/>},
        {path:'contact',element:<Contact/>}

        
    ]}
])

export default  class App extends Component {
    
    render() {
        return <>
        <RouterProvider router={routers}/>
 
        </>
        
    }
}
