import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomepageLayout from "./pages/layout/homepage-layout"
import Homepage from "./pages/home/landing/home-page";

const Routing = () => {
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomepageLayout />} >
                    <Route index element={<Homepage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </>)
}
export default Routing;