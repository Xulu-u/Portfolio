import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Chat from '../pages/Chat/Chat';
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;