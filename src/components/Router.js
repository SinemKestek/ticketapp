import {BrowserRouter, Routes,Route, Outlet } from "react-router-dom"
import Home from '../pages/Home'
import Footer from "./Footer"
import Navbar from "./Navbar"
import  Filter  from "../pages/Filter"
import DetailPage from "../pages/DetailPage"
import CategoryDetail from "../pages/CategoryDetail"
export default function Router() {
    const Layout=()=>{
        return(
            <>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
            </>
        )
    }
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/filter" element={<Filter/>}/>
                     <Route path="/categoryDetail/:categoryName" element={<CategoryDetail></CategoryDetail>}></Route>
                     <Route path="/detailPage/:index" element={<DetailPage/>}/>
                     </Route>
            </Routes>
            
            </BrowserRouter>



        )
    
    }


    

