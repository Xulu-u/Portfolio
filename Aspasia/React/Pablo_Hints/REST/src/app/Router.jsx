import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Home />} />

            <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </BrowserRouter>
)

export default Router;