import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function RootLayout(){
return <>
<Navbar/>
<Outlet></Outlet>
{/* <Footer/> */}
</>
}