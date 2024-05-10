import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Threads from '../pages/Threads/Threads';
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/threads" element={<Threads />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;