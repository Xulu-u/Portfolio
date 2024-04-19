import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Product from '../pages/Product'
import Layout from '../components/Layout/Layout';
import StarWars from '../pages/StarWars';
import StarWarsProfile from '../pages/StarWarsProfile';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/page2" element={<Page2 />} />

                <Route path="/product" element={<Product/>} />
                <Route path="/product/:id" element={<Product/>} />

                <Route path="/starwars" element={<StarWars/>} />
                <Route path="/starwars/:id" element={<StarWarsProfile/>} />
                <Route path="/starwars/*" element={<div>404 Swapi</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;