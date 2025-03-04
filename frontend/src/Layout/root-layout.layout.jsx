import Footer from "@/components/Footer"
import { Outlet } from "react-router"

function RootLayout(){
    return(
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default RootLayout